import { Box, Flex, Text } from '@chakra-ui/react'
// import React from 'react'
import { ArrowRightIcon, CalendarIcon, CloseIcon, NetfixIcon, PlayIcon, SearchIcon, TitleIcon } from '../../sharedcomponent/svg'
import InputComponent from '../../authComponent/inputComponent'
import SubmitBtn from '../../submitbtn'

interface Props { }

function ModalContent(props: Props) {
    const { } = props

    const friend = [
        {
            name: "Josh",
            email: "@ajokhai"
        },
        {
            name: "Mel",
            email: "@prettylittleux"
        }
    ]


    return (
        <Flex w={"full"} flexDir={"column"} bgColor={"#0D131B"}  >
            <Flex w={"full"} pb={"6"} >
                <Flex w={"full"} flexDir={"column"} >
                    <Box position={"relative"} w={"355px"} h={'310px'} >
                        {/* width="355" height="310"  */}
                        <TitleIcon />
                        <Box pos={"absolute"} inset={"0px"} w={"full"} h={"full"} style={{ background: "linear-gradient(156.97deg, rgba(7, 7, 7, 0) 14.91%, #0D131B 92.49%)" }} />
                    </Box>
                    <Box pl={"12"} mt={"-30px"} zIndex={"20"} >
                        <NetfixIcon />
                        <Text lineHeight={"27px"} fontWeight={"400"} mt={"1"} color={"#98A2B3"} >Start a watch party on Netflix  🎉</Text>

                        <Text lineHeight={"27px"} fontWeight={"500"} fontSize={"14px"} mt={"6"} color={"#FFF"} >Getting Started</Text>
                        <Flex pt={"4"} gap={"4"} flexDir={"column"} >
                            <Flex gap={"2"} alignItems={"center"} >
                                <Flex bgColor={"#1E2B3D"} w={"28px"} h={"28px"} color={"#98A2B3"} fontWeight={"400"} lineHeight={"25.89px"} rounded={"full"} justifyContent={"center"} alignItems={"center"} >
                                    1
                                </Flex>
                                <Text fontWeight={"400"} lineHeight={"25.89px"} fontSize={"14px"} color={"#98A2B3"} >Install <span style={{ color: "#7875FF" }} >Nova</span></Text>
                            </Flex>
                            <Flex gap={"2"} alignItems={"center"} >
                                <Flex bgColor={"#1E2B3D"} w={"28px"} h={"28px"} color={"#98A2B3"} fontWeight={"400"} lineHeight={"25.89px"} rounded={"full"} justifyContent={"center"} alignItems={"center"} >
                                    2
                                </Flex>
                                <Text fontWeight={"400"} lineHeight={"25.89px"} fontSize={"14px"} color={"#98A2B3"} >Pin Nova to your browser</Text>
                            </Flex>
                            <Flex gap={"2"} alignItems={"center"} >
                                <Flex bgColor={"#1E2B3D"} w={"28px"} h={"28px"} color={"#98A2B3"} fontWeight={"400"} lineHeight={"25.89px"} rounded={"full"} justifyContent={"center"} alignItems={"center"} >
                                    3
                                </Flex>
                                <Text fontWeight={"400"} lineHeight={"25.89px"} fontSize={"14px"} color={"#98A2B3"} >Open <span style={{ color: "#7875FF" }} >netflix.com/watch</span></Text>
                            </Flex>
                            <Flex gap={"2"} alignItems={"center"} >
                                <Flex bgColor={"#1E2B3D"} w={"28px"} h={"28px"} color={"#98A2B3"} fontWeight={"400"} lineHeight={"25.89px"} rounded={"full"} justifyContent={"center"} alignItems={"center"} >
                                    4
                                </Flex>
                                <Text fontWeight={"400"} lineHeight={"25.89px"} fontSize={"14px"} color={"#98A2B3"} >Click on the Nova extension</Text>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
                <Flex w={"full"} py={"6"} pr={"4"} flexDir={"column"} gap={"5"} >
                    <Flex w={"full"} bgColor={"#121A24"} px={"4"} py={"25px"} flexDir={"column"} rounded={"24px"} >
                        <Text fontWeight={"600"} fontSize={"14px"} lineHeight={"20px"} color={"#E4E7EC"} >Schedule a watch party</Text>
                        <Box w={"full"} p={"4"} rounded={"8px"} my={"4"} bgColor={"#7979791A"} >
                            <Flex gap={"2"} alignItems={"center"} >
                                <CalendarIcon />
                                <Text fontWeight={"500"} fontSize={"14px"} lineHeight={"27px"} color={"#FFF"} >Schedule for later with friends</Text>
                            </Flex>
                            <Text fontWeight={"400"} mt={"1"} fontSize={"14px"} lineHeight={"25.89px"} color={"#98A2B3"} >
                                You can schedule to catch up on a movie later with friends any time you want. Select the friends you want to invite to continue.
                            </Text>
                        </Box>
                        <InputComponent placeholder="Search for friends" type="text" style={{ boxShadow: "0px 1px 2px 0px #1018280D" }} right={true} rightIcon={<SearchIcon />} />
                        <Box w={"full"} my={"4"} >
                            {friend?.map((item: any) => {
                                return (
                                    <Flex key={item?.name} alignItems={"center"} py={"10px"} px={"10px"} justifyContent={"space-between"} >
                                        <Flex alignItems={"center"} gap={"8px"} >
                                            <Box w={"40px"} h={"40px"} rounded={"full"} bg={"brand.base"} >

                                            </Box>
                                            <Box>
                                                <Text color={"brand.gray200"} fontFamily={"700"} >{item?.name}</Text>
                                                <Text color={"brand.gray300"} fontFamily={"400"} >{item?.email}</Text>
                                            </Box>
                                        </Flex>
                                        <Flex alignItems={"center"} gap={"10px"} >
                                            <CloseIcon />
                                        </Flex>
                                    </Flex>
                                )
                            })}
                        </Box>
                        <SubmitBtn loading={false} name={'Continue'} />
                    </Flex>
                    <Flex w={"full"} bgColor={"#121A24"} height={"51px"} alignItems={"center"} rounded={"24px"} px={"5"} justifyContent={"space-between"} >
                        <Flex gap={"2"} alignItems={"center"} >
                            <Text fontWeight={"600"} fontSize={"14px"} lineHeight={"20px"} color={"#E4E7EC"} >Suggest a movie</Text>
                            <Flex height={"18px"} color={"#EAECF0"} px={"2"} justifyContent={"center"} alignItems={"center"} fontSize={"12px"} lineHeight={"18px"} rounded={"full"} border={"1.5px solid #F2F4F7"} fontWeight={"500"} >
                                Pro
                            </Flex>
                        </Flex>
                        <ArrowRightIcon />
                    </Flex>
                </Flex>
            </Flex>

            <Flex pl={"12"} alignItems={"center"} py={"3"} gap={"3"} color={"#EAECF0"} borderTop={"1px solid #FFFFFF0D"} >
                <PlayIcon />
                <Text fontSize={"14px"} lineHeight={"27px"} >Still need help setting up? <span style={{ textDecoration: "underline" }} >Watch our video guide</span></Text>
            </Flex>
        </Flex>
    )
}

export default ModalContent
