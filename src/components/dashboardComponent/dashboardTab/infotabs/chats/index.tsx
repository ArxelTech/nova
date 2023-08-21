import { Box, Flex, Text } from '@chakra-ui/react'

interface Props {}

function Chats(props: Props) {
    const {} = props

    const chats = [
        {
            message: "Ice cream so good. Geng geng What’s happening guys 😊",
            by: "friend",
            name: "Josh"
        }, 
        {
            message: "What is this lmao 🤣",
            by: "self",
            name: "Michael"
        }, 
        {
            message: "Dfkm start the movie 💀",
            by: "friend",
            name: "Mel"
        }, 
        {
            message: "Dfkm start the movie 💀",
            by: "friend",
            name: "Mel"
        }, 
        {
            message: "Dfkm start the movie 💀",
            by: "friend",
            name: "Mel"
        }, 
        {
            message: "What is this lmao 🤣",
            by: "self",
            name: "Michael"
        }, 
        {
            message: "What is this lmao 🤣",
            by: "self",
            name: "Michael"
        }, 
        {
            message: "What is this lmao 🤣",
            by: "self",
            name: "Michael"
        }, 
        {
            message: "Dfkm start the movie 💀",
            by: "friend",
            name: "Mel"
        }
    ]

    return (
        <Box w={"full"} overflowY={"auto"} position={"relative"} sx={{ flex: '1 0 auto' }} gap={"28px"} flexDirection={"column"} >
            {chats?.map((item: any, index: number)=> { 
                return( 
                    <Flex key={index} w={"full"} gap={"10px"} justifyContent={item?.by !== "self" ? "": "end"} >
                        {item?.by !== "self" &&
                            <Box w="40px" h="40px" rounded={"full"} bg={"brand.gray300"} >

                            </Box>
                        }
                        <Box maxW={"70%"} display={"flex"} flexDirection={"column"} py={"3px"} >
                            <Text color={"brand.gray200"} fontFamily={"700"} ml={item?.by !== "self" ? "": "auto"} >{item?.name}</Text>
                            <Box px={"15px"} py={"8px"} bg={item?.by !== "self" ? "brand.chat" : "brand.base"} mt={"4px"} rounded={"8px"} color={"white"} >
                                {item?.message}
                            </Box>
                        </Box>
                        {item?.by === "self" &&
                            <Box w="40px" h="40px" rounded={"full"} bg={"brand.gray300"} >
    
                            </Box>
                        }
                    </Flex>
                ) 
            })}
        </Box>
    )
}

export default Chats
