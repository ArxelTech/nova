import { Box, Button, Flex, Text } from '@chakra-ui/react'
// import React from 'react'

interface Props {}

function RequestFriendTab(props: Props) {
    const {} = props

    
    const friend = [
        {
            name: "Josh",
            email: "@ajokhai"
        },
        {
            name: "Mel",
            email: "@prettylittleux"
        },
        {
            name: "Michael ",
            email: "@dnaijatechguy"
        },
        {
            name: "Fuego",
            email: "@Jayhans"
        },
        {
            name: "Josh",
            email: "@ajokhai"
        },
        {
            name: "Josh",
            email: "@ajokhai"
        },
        {
            name: "Michael ",
            email: "@dnaijatechguy"
        },
        {
            name: "Fuego",
            email: "@Jayhans"
        },
        {
            name: "Josh",
            email: "@ajokhai"
        },
        {
            name: "Josh",
            email: "@ajokhai"
        }
    ]

    return (
        <Box  w={"full"} overflowY={"auto"} position={"relative"} display={"flex"} sx={{ flex: '1 0 auto' }} gap={"28px"} flexDirection={"column"}>
            {friend?.map((item: any) => {
                return( 
                    <Box key={item?.name} alignItems={"center"} py={"14px"} px={"10px"} borderBottom={"1px"} justifyContent={"space-between"}> 
                        <Flex alignItems="center" mt="11px" gap="9px" >
                            <Box w="40px" h="40px" rounded="full" bg="aqua" >

                            </Box>
                            <Text textColor={"brand.gray300"} display="flex" fontFamily="400" ><Text mr="5px" fontFamily="700" color="white" >{item?.name}</Text> wants to join the watch party</Text>
                        </Flex>
                        <Flex gap="8px" mt="20px" >
                            <Button py="6px" px="20px" rounded="8px" _hover={{ backgroundColor: "brand.black"}} _focus={{ backgroundColor: "brand.black"}} border="1px" bg="transparent" color="#D4FFF5" variant='outline' >
                                Accept
                            </Button>
                            <Button py="6px" px="20px" rounded="8px" _hover={{ backgroundColor: "brand.black"}} _focus={{ backgroundColor: "brand.black"}} border="1px" bg="transparent" color="#FFCFCF" variant='outline' >
                                Reject
                            </Button>
                        </Flex>
                    </Box>
                )
            })}
        </Box>
    )
}

export default RequestFriendTab
