import { Box, Flex, Text } from '@chakra-ui/react'
// import React from 'react'

interface Props {}

function PendingTab(props: Props) {
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
                    <Flex key={item?.name} alignItems={"center"} py={"14px"} px={"10px"} borderBottom={"1px"} justifyContent={"space-between"} >
                        <Flex alignItems={"center"} gap={"8px"} > 
                            <Box w={"40px"} h={"40px"} rounded={"full"} bg={"brand.base"} >

                            </Box>
                            <Box>
                                <Text color={"brand.gray200"} fontFamily={"700"} >{item?.name}</Text>
                                <Text color={"brand.gray300"} fontFamily={"400"} >{item?.email}</Text>
                            </Box>
                        </Flex>
                        <Box as="button" >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="vuesax/outline/close-circle">
                                    <g id="close-circle">
                                        <path id="Vector" d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#FFB6BA"/>
                                        <path id="Vector_2" d="M9.17035 15.5801C8.98035 15.5801 8.79035 15.5101 8.64035 15.3601C8.35035 15.0701 8.35035 14.5901 8.64035 14.3001L14.3004 8.64011C14.5904 8.35011 15.0704 8.35011 15.3604 8.64011C15.6504 8.93011 15.6504 9.41011 15.3604 9.70011L9.70035 15.3601C9.56035 15.5101 9.36035 15.5801 9.17035 15.5801Z" fill="#FFB6BA"/>
                                        <path id="Vector_3" d="M14.8304 15.5801C14.6404 15.5801 14.4504 15.5101 14.3004 15.3601L8.64035 9.70011C8.35035 9.41011 8.35035 8.93011 8.64035 8.64011C8.93035 8.35011 9.41035 8.35011 9.70035 8.64011L15.3604 14.3001C15.6504 14.5901 15.6504 15.0701 15.3604 15.3601C15.2104 15.5101 15.0204 15.5801 14.8304 15.5801Z" fill="#FFB6BA"/>
                                    </g>
                                </g>
                            </svg>
                        </Box>
                    </Flex>
                )
            })}
        </Box>
    )
}

export default PendingTab
