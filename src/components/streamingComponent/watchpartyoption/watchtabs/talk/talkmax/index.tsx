import { Box, Button, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
// import React from 'react'

interface Props {
    close: any
}

function TalkMax(props: Props) {
    const {
        close
    } = props

    return (
        
        <Box w={"full"} h={"full"} pt={"20px"} pb={"24px"} >
            <Box w={"full"} h={"full"} overflowY={"auto"} display={"flex"} flexDirection={"column"} pb={"20px"} rounded={"5px"} border={"1px"} flex={"1"} bg={"brand.secondarybg"} >
                <Flex alignItems={"center"} h={"fit-content"} py={"13px"} px={"16px"} borderBottom={"1px"} >
                    <Box w={"11px"} h={"11px"} rounded={"full"} bg={"#27ECA5"} />
                    <Text color={"brand.gray300"} ml={"7px"} >Voice Chat is active</Text>
                    <Box onClick={()=> close(false)} as='button' ml={"auto"} >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="white"/>
                            <path d="M9.16986 15.5801C8.97986 15.5801 8.78986 15.5101 8.63986 15.3601C8.34986 15.0701 8.34986 14.5901 8.63986 14.3001L14.2999 8.64011C14.5899 8.35011 15.0699 8.35011 15.3599 8.64011C15.6499 8.93011 15.6499 9.41011 15.3599 9.70011L9.69986 15.3601C9.55986 15.5101 9.35986 15.5801 9.16986 15.5801Z" fill="white"/>
                            <path d="M14.8299 15.5801C14.6399 15.5801 14.4499 15.5101 14.2999 15.3601L8.63986 9.70011C8.34986 9.41011 8.34986 8.93011 8.63986 8.64011C8.92986 8.35011 9.40986 8.35011 9.69986 8.64011L15.3599 14.3001C15.6499 14.5901 15.6499 15.0701 15.3599 15.3601C15.2099 15.5101 15.0199 15.5801 14.8299 15.5801Z" fill="white"/>
                        </svg>
                    </Box>
                </Flex>

                <Grid  px={"16px"} py={"20px"} templateColumns='repeat(4, 1fr)' gap={"auto"} rowGap={"12px"} > 
                    <GridItem w={"55px"} rounded={"16px"}  >
                        <Box w={"55px"} h={"55px"} position={"relative"} rounded={"full"} bg={"brown"} >
                            <Box position={'absolute'} bottom={"0px"} right={"2px"} w={"18px"} h={"18px"} rounded={"full"} bg={"brand.base"} display={"flex"} alignItems={"center"} justifyContent={"center"} >
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.91683 4.16675V5.00008C7.91683 5.77363 7.60954 6.5155 7.06256 7.06248C6.51558 7.60946 5.77371 7.91675 5.00016 7.91675M5.00016 7.91675C4.22661 7.91675 3.48475 7.60946 2.93777 7.06248C2.39079 6.5155 2.0835 5.77363 2.0835 5.00008V4.16675M5.00016 7.91675V9.58342M3.3335 9.58342H6.66683M5.00016 0.416748C4.66864 0.416748 4.3507 0.548444 4.11628 0.782865C3.88186 1.01729 3.75016 1.33523 3.75016 1.66675V5.00008C3.75016 5.3316 3.88186 5.64954 4.11628 5.88397C4.3507 6.11839 4.66864 6.25008 5.00016 6.25008C5.33168 6.25008 5.64963 6.11839 5.88405 5.88397C6.11847 5.64954 6.25016 5.3316 6.25016 5.00008V1.66675C6.25016 1.33523 6.11847 1.01729 5.88405 0.782865C5.64963 0.548444 5.33168 0.416748 5.00016 0.416748Z" stroke="white" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </Box>
                        </Box>
                        <Text color={"brand.gray200"} fontFamily={"500"} mt={"2px"} textAlign={"center"} >Jay</Text>
                    </GridItem>   
                    <GridItem w={"55px"} rounded={"16px"}  >
                        <Box w={"55px"} h={"55px"} position={"relative"} rounded={"full"} bg={"brown"} >
                            <Box position={'absolute'} bottom={"0px"} right={"2px"} w={"18px"} h={"18px"} rounded={"full"} bg={"brand.base"} display={"flex"} alignItems={"center"} justifyContent={"center"} >
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.91683 4.16675V5.00008C7.91683 5.77363 7.60954 6.5155 7.06256 7.06248C6.51558 7.60946 5.77371 7.91675 5.00016 7.91675M5.00016 7.91675C4.22661 7.91675 3.48475 7.60946 2.93777 7.06248C2.39079 6.5155 2.0835 5.77363 2.0835 5.00008V4.16675M5.00016 7.91675V9.58342M3.3335 9.58342H6.66683M5.00016 0.416748C4.66864 0.416748 4.3507 0.548444 4.11628 0.782865C3.88186 1.01729 3.75016 1.33523 3.75016 1.66675V5.00008C3.75016 5.3316 3.88186 5.64954 4.11628 5.88397C4.3507 6.11839 4.66864 6.25008 5.00016 6.25008C5.33168 6.25008 5.64963 6.11839 5.88405 5.88397C6.11847 5.64954 6.25016 5.3316 6.25016 5.00008V1.66675C6.25016 1.33523 6.11847 1.01729 5.88405 0.782865C5.64963 0.548444 5.33168 0.416748 5.00016 0.416748Z" stroke="white" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </Box>
                        </Box>
                        <Text color={"brand.gray200"} fontFamily={"500"} mt={"2px"} textAlign={"center"} >Jay</Text>
                    </GridItem>   
                    <GridItem w={"55px"} rounded={"16px"}  >
                        <Box w={"55px"} h={"55px"} position={"relative"} rounded={"full"} bg={"brown"} >
                            <Box position={'absolute'} bottom={"0px"} right={"2px"} w={"18px"} h={"18px"} rounded={"full"} bg={"brand.base"} display={"flex"} alignItems={"center"} justifyContent={"center"} >
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.91683 4.16675V5.00008C7.91683 5.77363 7.60954 6.5155 7.06256 7.06248C6.51558 7.60946 5.77371 7.91675 5.00016 7.91675M5.00016 7.91675C4.22661 7.91675 3.48475 7.60946 2.93777 7.06248C2.39079 6.5155 2.0835 5.77363 2.0835 5.00008V4.16675M5.00016 7.91675V9.58342M3.3335 9.58342H6.66683M5.00016 0.416748C4.66864 0.416748 4.3507 0.548444 4.11628 0.782865C3.88186 1.01729 3.75016 1.33523 3.75016 1.66675V5.00008C3.75016 5.3316 3.88186 5.64954 4.11628 5.88397C4.3507 6.11839 4.66864 6.25008 5.00016 6.25008C5.33168 6.25008 5.64963 6.11839 5.88405 5.88397C6.11847 5.64954 6.25016 5.3316 6.25016 5.00008V1.66675C6.25016 1.33523 6.11847 1.01729 5.88405 0.782865C5.64963 0.548444 5.33168 0.416748 5.00016 0.416748Z" stroke="white" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </Box>
                        </Box>
                        <Text color={"brand.gray200"} fontFamily={"500"} mt={"2px"} textAlign={"center"} >Jay</Text>
                    </GridItem>   
                    <GridItem w={"55px"} rounded={"16px"}  >
                        <Box w={"55px"} h={"55px"} position={"relative"} rounded={"full"} bg={"brown"} >
                            <Box position={'absolute'} bottom={"0px"} right={"2px"} w={"18px"} h={"18px"} rounded={"full"} bg={"brand.base"} display={"flex"} alignItems={"center"} justifyContent={"center"} >
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.91683 4.16675V5.00008C7.91683 5.77363 7.60954 6.5155 7.06256 7.06248C6.51558 7.60946 5.77371 7.91675 5.00016 7.91675M5.00016 7.91675C4.22661 7.91675 3.48475 7.60946 2.93777 7.06248C2.39079 6.5155 2.0835 5.77363 2.0835 5.00008V4.16675M5.00016 7.91675V9.58342M3.3335 9.58342H6.66683M5.00016 0.416748C4.66864 0.416748 4.3507 0.548444 4.11628 0.782865C3.88186 1.01729 3.75016 1.33523 3.75016 1.66675V5.00008C3.75016 5.3316 3.88186 5.64954 4.11628 5.88397C4.3507 6.11839 4.66864 6.25008 5.00016 6.25008C5.33168 6.25008 5.64963 6.11839 5.88405 5.88397C6.11847 5.64954 6.25016 5.3316 6.25016 5.00008V1.66675C6.25016 1.33523 6.11847 1.01729 5.88405 0.782865C5.64963 0.548444 5.33168 0.416748 5.00016 0.416748Z" stroke="white" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </Box>
                        </Box>
                        <Text color={"brand.gray200"} fontFamily={"500"} mt={"2px"} textAlign={"center"} >Jay</Text>
                    </GridItem>   
                    <GridItem w={"55px"} rounded={"16px"}  >
                        <Box w={"55px"} h={"55px"} position={"relative"} rounded={"full"} bg={"brown"} >
                            <Box position={'absolute'} bottom={"0px"} right={"2px"} w={"18px"} h={"18px"} rounded={"full"} bg={"brand.base"} display={"flex"} alignItems={"center"} justifyContent={"center"} >
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.91683 4.16675V5.00008C7.91683 5.77363 7.60954 6.5155 7.06256 7.06248C6.51558 7.60946 5.77371 7.91675 5.00016 7.91675M5.00016 7.91675C4.22661 7.91675 3.48475 7.60946 2.93777 7.06248C2.39079 6.5155 2.0835 5.77363 2.0835 5.00008V4.16675M5.00016 7.91675V9.58342M3.3335 9.58342H6.66683M5.00016 0.416748C4.66864 0.416748 4.3507 0.548444 4.11628 0.782865C3.88186 1.01729 3.75016 1.33523 3.75016 1.66675V5.00008C3.75016 5.3316 3.88186 5.64954 4.11628 5.88397C4.3507 6.11839 4.66864 6.25008 5.00016 6.25008C5.33168 6.25008 5.64963 6.11839 5.88405 5.88397C6.11847 5.64954 6.25016 5.3316 6.25016 5.00008V1.66675C6.25016 1.33523 6.11847 1.01729 5.88405 0.782865C5.64963 0.548444 5.33168 0.416748 5.00016 0.416748Z" stroke="white" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </Box>
                        </Box>
                        <Text color={"brand.gray200"} fontFamily={"500"} mt={"2px"} textAlign={"center"} >Jay</Text>
                    </GridItem>   
                    <GridItem w={"55px"} rounded={"16px"}  >
                        <Box w={"55px"} h={"55px"} position={"relative"} rounded={"full"} bg={"brown"} >
                            <Box position={'absolute'} bottom={"0px"} right={"2px"} w={"18px"} h={"18px"} rounded={"full"} bg={"brand.base"} display={"flex"} alignItems={"center"} justifyContent={"center"} >
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.91683 4.16675V5.00008C7.91683 5.77363 7.60954 6.5155 7.06256 7.06248C6.51558 7.60946 5.77371 7.91675 5.00016 7.91675M5.00016 7.91675C4.22661 7.91675 3.48475 7.60946 2.93777 7.06248C2.39079 6.5155 2.0835 5.77363 2.0835 5.00008V4.16675M5.00016 7.91675V9.58342M3.3335 9.58342H6.66683M5.00016 0.416748C4.66864 0.416748 4.3507 0.548444 4.11628 0.782865C3.88186 1.01729 3.75016 1.33523 3.75016 1.66675V5.00008C3.75016 5.3316 3.88186 5.64954 4.11628 5.88397C4.3507 6.11839 4.66864 6.25008 5.00016 6.25008C5.33168 6.25008 5.64963 6.11839 5.88405 5.88397C6.11847 5.64954 6.25016 5.3316 6.25016 5.00008V1.66675C6.25016 1.33523 6.11847 1.01729 5.88405 0.782865C5.64963 0.548444 5.33168 0.416748 5.00016 0.416748Z" stroke="white" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </Box>
                        </Box>
                        <Text color={"brand.gray200"} fontFamily={"500"} mt={"2px"} textAlign={"center"} >Jay</Text>
                    </GridItem>  
                </Grid>
                <Box px="12px" w={"full"} mt={"auto"} pt={"20px"} > 
                    <Box p={"16px"} rounded={"8px"} bg={"brand.btnbg"} w={"full"} >
                        <Text fontFamily={"700"} color={"brand.gray200"} >Enjoying the conversation, Michael? 😉</Text>
                        <Text fontFamily={"400"} color={"brand.gray200"}>Just checking in to remind you to keep interactions with everyone respectful.</Text> 
                    </Box>

                    <Button height={"36px"} px="20px" mt={"19px"} w="fit-content" rounded="8px" _hover={{ backgroundColor: "transparent"}} _focus={{ backgroundColor: "transparent"}} border="1px" bg="transparent" fontSize={"14px"} color="white" variant='outline' >
                        Leave Conversation
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default TalkMax
