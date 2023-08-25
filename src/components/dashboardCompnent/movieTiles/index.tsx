/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid, GridItem, Flex, Box, Text } from '@chakra-ui/react'  

// interface Props {}

function MovieTile() {
    // const {} = props

    const list = [
        "text",
        "text",
        "text",
        "text",
        "text",
        "text",
        "text",
        "text",
        "text",
        "text",
        "text",
    ]

    return ( 
        <Grid py={"20px"} templateColumns='repeat(2, 1fr)' gap={"39px"} > 
            {list?.map((item: any, index: number)=> {
                return( 
                    <GridItem key={item+index} w={"full"} bg={"brand.btnbg"} rounded={"16px"} >
                        <Box w={"full"} h={"175px"} roundedTop={"16px"} bg={"red.900"} >

                        </Box>
                        <Flex w={"full"} alignItems={"center"} px={"17px"} py={"19px"} gap={"13px"} >
                            <Box w={"fit-content"} >
                                <Box rounded={"full"} w={"40px"} h={"40px"} bg={"brand.base"} >

                                </Box>
                            </Box>
                            <Text color={"brand.gray300"} >Josh and 5 other people are currently watching 🍿 Peaky Blinders S1 E12 - On Netflix</Text>
                            {/* <Text color={"brand.gray300"} >Josh and 5 other people are currently watching  🍿 <Text display={"flex"} color={"brand.primaryColor"}>Peaky Blinders S1 E12</Text> - On Netflix</Text> */}
                        </Flex>
                    </GridItem> 
                )
            })}
        </Grid> 
    )
}

export default MovieTile
