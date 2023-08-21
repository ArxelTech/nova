import { Box, Button, Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react' 
import Infotab from './infotabs'
import WatchPartyOption from '../watchpartyoption'

interface Props {}

function DashboardTab(props: Props) {
    const {} = props

    const [tab, setTab] = React.useState(false)

    return (
        <Box w="full" height={"100%"} display={"flex"} flexDirection={"column"} >
            <Box w="full" bg={"brand.black"} pt={"28px"} zIndex={"30"} position={"sticky"} top={"0px"} > 
                <WatchPartyOption />
                <Box mt="20px"  w="100%" bg="brand.tabcolor" rounded={"10px"} px={"7px"} py={"6px"} >
                    <Flex gap={"6px"} >
                        <Button onClick={()=> setTab(false)} _hover={{ backgroundColor: "brand.btnbg"}} _focus={{ backgroundColor: "brand.btnbg"}} h="50px" w="full" bg={!tab ? "brand.btnbg" : ""} color={"brand.gray200"} rounded={"10px"} >
                            Chat
                        </Button>
                        <Button onClick={()=> setTab(true)} _hover={{ backgroundColor: "brand.btnbg"}} _focus={{ backgroundColor: "brand.btnbg"}} h="50px" display="flex" alignItems="center" gap="4px" w="full" bg={tab ? "brand.btnbg" : ""} color={"brand.gray200"} rounded={"10px"} >
                            Friends <Box  display="flex" ml="5px" alignItems="center" rounded="full" justifyContent="center" bg={"brand.base"} fontSize={"14px"} w="24px" h="24px" color={"brand.gray200"} >5</Box>
                        </Button>
                    </Flex>
                </Box>
            </Box>
            <Infotab tab={tab} /> 
            {!tab && ( 
                <Box w="full" bg={"brand.black"} position={"sticky"} mt={"auto"} py={"20px"} bottom={"0px"}  > 
                    <InputGroup> 
                        <Input w={"full"} height={"50px"} placeholder='Enter amount' color={"white"} borderColor={"gray.500"} focusBorderColor={"gray.500"} borderRadius={"8px"} />
                        <InputRightElement display={"flex"} gap={"6px"} width={"auto"} pr={"10px"} height={"50px"}>
                            <svg role='button' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="vuesax/outline/emoji-happy">
                                    <g id="emoji-happy">
                                        <path id="Vector" d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="#667085"/>
                                        <path id="Vector_2" d="M15.5 10.5C14.26 10.5 13.25 9.49 13.25 8.25C13.25 7.01 14.26 6 15.5 6C16.74 6 17.75 7.01 17.75 8.25C17.75 9.49 16.74 10.5 15.5 10.5ZM15.5 7.5C15.09 7.5 14.75 7.84 14.75 8.25C14.75 8.66 15.09 9 15.5 9C15.91 9 16.25 8.66 16.25 8.25C16.25 7.84 15.91 7.5 15.5 7.5Z" fill="#667085"/>
                                        <path id="Vector_3" d="M8.5 10.5C7.26 10.5 6.25 9.49 6.25 8.25C6.25 7.01 7.26 6 8.5 6C9.74 6 10.75 7.01 10.75 8.25C10.75 9.49 9.74 10.5 8.5 10.5ZM8.5 7.5C8.09 7.5 7.75 7.84 7.75 8.25C7.75 8.66 8.09 9 8.5 9C8.91 9 9.25 8.66 9.25 8.25C9.25 7.84 8.91 7.5 8.5 7.5Z" fill="#667085"/>
                                        <path id="Vector_4" d="M12 19.45C9.1 19.45 6.75 17.09 6.75 14.2C6.75 13.29 7.49 12.55 8.4 12.55H15.6C16.51 12.55 17.25 13.29 17.25 14.2C17.25 17.09 14.9 19.45 12 19.45ZM8.4 14.05C8.32 14.05 8.25 14.12 8.25 14.2C8.25 16.27 9.93 17.95 12 17.95C14.07 17.95 15.75 16.27 15.75 14.2C15.75 14.12 15.68 14.05 15.6 14.05H8.4Z" fill="#667085"/>
                                    </g>
                                </g>
                            </svg>
                            <svg role='button' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="image">
                                    <path id="Icon" d="M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21ZM5 21L16 10L21 15M10 8.5C10 9.32843 9.32843 10 8.5 10C7.67157 10 7 9.32843 7 8.5C7 7.67157 7.67157 7 8.5 7C9.32843 7 10 7.67157 10 8.5Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                            </svg>
                            <svg role='button' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="white"/>
                                <path d="M9.17035 15.5801C8.98035 15.5801 8.79035 15.5101 8.64035 15.3601C8.35035 15.0701 8.35035 14.5901 8.64035 14.3001L14.3004 8.64011C14.5904 8.35011 15.0704 8.35011 15.3604 8.64011C15.6504 8.93011 15.6504 9.41011 15.3604 9.70011L9.70035 15.3601C9.56035 15.5101 9.36035 15.5801 9.17035 15.5801Z" fill="white"/>
                                <path d="M14.8304 15.5801C14.6404 15.5801 14.4504 15.5101 14.3004 15.3601L8.64035 9.70011C8.35035 9.41011 8.35035 8.93011 8.64035 8.64011C8.93035 8.35011 9.41035 8.35011 9.70035 8.64011L15.3604 14.3001C15.6504 14.5901 15.6504 15.0701 15.3604 15.3601C15.2104 15.5101 15.0204 15.5801 14.8304 15.5801Z" fill="white"/>
                            </svg>
                        </InputRightElement>
                    </InputGroup>
                </Box>
            )}
        </Box>
    )
}

export default DashboardTab
