import { Box, Flex, Grid, Text } from '@chakra-ui/react' 
import Topbar from '../../components/topbar'
import { colorPallette } from '../../theme/theme' 
import StreamingTab from '../../components/streamingComponent/streamingTab'

// interface Props {}

function Streaming() {
    // const {} = props

    return (
        <Grid h="100vh" w={"full"}  overflowY={["auto", "auto", "hidden"]} >
            <Flex w="full" h="full" flexDirection={["column", "column","row"]} overflowY={"hidden"} bg={colorPallette.black} >
                <Box position={"relative"} width="full" h="full" borderRight="1px"> 
                    <Box width="full" position={"absolute"} display={["none", "none", "block"]} zIndex={"30"} top={"0px"} >
                        <Topbar user={false} />
                    </Box>
                    <Box width="full" h={["40vh", "40vh" ,"100vh"]} pt={"130px"} flexWrap={"inherit"} flex={1} display={"flex"} bg="blue.300" >
                        <Text mt="auto" >Hello</Text>
                    </Box>
                </Box>
                <Box w={["full", "full" ,"fit-content"]} >
                    <Box width={["full", "full" ,"460px"]} position={"relative"} px="28px" h={["60vh", "60vh" ,"100vh"]} overflowY={"auto"} >
                        <StreamingTab />
                    </Box>
                </Box>
            </Flex>
        </Grid>
    )
}

export default Streaming
