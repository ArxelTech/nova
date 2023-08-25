import { Box, Flex, Text } from '@chakra-ui/react' 
import Topbar from '../../components/topbar'
import { colorPallette } from '../../theme/theme' 
import StreamingTab from '../../components/streamingComponent/streamingTab'

// interface Props {}

function Streaming() {
    // const {} = props

    return (
        <Flex w="full" h="100vh" overflowY={"hidden"} bg={colorPallette.black} >
            <Box width="full" h="100vh" borderRight="1px">
                <Topbar user={false} />
                <Box width="full" h={"full"} flexWrap={"inherit"} flex={1} display={"flex"} bg="blue.300" >
                    <Text mt="auto" >Hello</Text>
                </Box>
            </Box>
            <Box w="fit-content" >
                <Box width="390px" position={"relative"} px="28px" h={"100vh"} overflowY={"auto"} >
                    <StreamingTab />
                </Box>
            </Box>
        </Flex>
    )
}

export default Streaming
