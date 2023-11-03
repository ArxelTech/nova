import { Box, Flex, Text } from '@chakra-ui/react'
// import React from 'react'

interface Props {}

function AddedTab(props: Props) {
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
        <Box  w={"full"} overflowY={"auto"} position={"relative"} display={"flex"} sx={{ flex: '1 0 auto' }} gap={"10px"} flexDirection={"column"}>
            {friend?.map((item: any) => {
                return( 
                    <Flex key={item?.name} alignItems={"center"} py={"10px"} px={"10px"} borderBottom={"1px"} justifyContent={"space-between"} >
                        <Flex alignItems={"center"} gap={"8px"} > 
                            <Box w={"40px"} h={"40px"} rounded={"full"} bg={"brand.base"} >

                            </Box>
                            <Box>
                                <Text color={"brand.gray200"} fontFamily={"700"} >{item?.name}</Text>
                                <Text color={"brand.gray300"} fontFamily={"400"} >{item?.email}</Text>
                            </Box>
                        </Flex>
                        <Flex alignItems={"center"} gap={"10px"} >
                            <Box w={"24px"} h={"24px"} rounded={"full"} bg={"brand.base"} >

                            </Box>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="kebab-menu 1">
                                    <path id="Vector" d="M12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7Z" fill="#E4E7EC"/>
                                    <path id="Vector_2" d="M12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21Z" fill="#E4E7EC"/>
                                    <path id="Vector_3" d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#E4E7EC"/>
                                </g>
                            </svg>
                        </Flex>
                    </Flex>
                )
            })}
        </Box>
    )
}

export default AddedTab
