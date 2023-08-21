import { Flex, Button, Box, Text } from '@chakra-ui/react' 
// import React from 'react'

interface Props {}

function RequestTab(props: Props) {
    const {} = props

    return (
            <Box width="full" bg="brand.secondarybg" mt="20px" border="1px" rounded="10px" borderColor="#FFFFFF0D" color="white" py="15px" px="22px" >
                <Flex alignItems="center" justifyContent="space-between" >
                    <Text fontFamily="700" color="brand.gray300" >New Request</Text>
                    <Box cursor="pointer" rounded="full" >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="white"/>
                            <path d="M9.17035 15.5801C8.98035 15.5801 8.79035 15.5101 8.64035 15.3601C8.35035 15.0701 8.35035 14.5901 8.64035 14.3001L14.3004 8.64011C14.5904 8.35011 15.0704 8.35011 15.3604 8.64011C15.6504 8.93011 15.6504 9.41011 15.3604 9.70011L9.70035 15.3601C9.56035 15.5101 9.36035 15.5801 9.17035 15.5801Z" fill="white"/>
                            <path d="M14.8304 15.5801C14.6404 15.5801 14.4504 15.5101 14.3004 15.3601L8.64035 9.70011C8.35035 9.41011 8.35035 8.93011 8.64035 8.64011C8.93035 8.35011 9.41035 8.35011 9.70035 8.64011L15.3604 14.3001C15.6504 14.5901 15.6504 15.0701 15.3604 15.3601C15.2104 15.5101 15.0204 15.5801 14.8304 15.5801Z" fill="white"/>
                        </svg>
                    </Box> 
                </Flex>
                <Flex alignItems="center" mt="11px" gap="9px" >
                    <Box w="40px" h="40px" rounded="full" bg="aqua" >

                    </Box>
                    <Text textColor={"brand.gray300"} display="flex" fontFamily="400" ><Text mr="5px" fontFamily="700" color="white" >Mel</Text> wants to join the watch party</Text>
                </Flex>
                <Flex gap="8px" mt="20px" >
                    <Button py="6px" px="20px" rounded="8px" _hover={{ backgroundColor: "brand.black"}} _focus={{ backgroundColor: "brand.black"}} border="1px" bg="transparent" color="#D4FFF5" variant='outline' >
                        Yes
                    </Button>
                    <Button py="6px" px="20px" rounded="8px" _hover={{ backgroundColor: "brand.black"}} _focus={{ backgroundColor: "brand.black"}} border="1px" bg="transparent" color="#FFCFCF" variant='outline' >
                        No
                    </Button>
                </Flex>
            </Box> 
    )
}

export default RequestTab
