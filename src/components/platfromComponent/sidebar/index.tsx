import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { Clock, Dashboard, Genie, Heart, Logout, OrangeCircle, PurpleCircle, Star, User } from '../../sharedcomponent/svg'

interface Props { }

function PlatformSidebar(props: Props) {
    const { } = props

    const firstnav = ["Dashboard", "Watch History", "Movie Genie", "Friends"]

    const secondnav = ["Best Couple", "Nova Squad"]

    const thirdnav = ["My Profile", "Subscriptions"]

    const [active, setActive] = useState("Dashboard")

    return (
        <Flex flexDir={"column"} width={"full"} h={"100vh"} overflowY={"auto"} >
            <Flex px={"6"} pt={"35px"} pb={"5"} flexDir={"column"} >
                <Image width={"90px"} src={"/images/logo.svg"} />

                <Box p={"16px"} rounded={"8px"} mt={"6"} bg={"brand.btnbg"} w={"full"} >
                    <Text fontFamily={"700"} color={"brand.gray200"} >Upgrade to Nova Pro</Text>
                    <Text fontFamily={"400"} lineHeight={"25.888px"} fontSize={"sm"} color={"brand.gray200"}>Access premium features like video & audio conversations and more</Text>
                    <Button _hover={{ backgroundColor: "#5A20D5" }} color={"white"} mt={"12px"} bgColor={"#5A20D5"} width={"135px"} height={"36px"} fontSize={"14px"} fontFamily={"600"} rounded={"8px"} >
                        Go Premium
                    </Button>
                </Box>
                <Text color={"#98A2B3"} fontSize={"14px"} lineHeight={"27px"} mt={"7"} >For You</Text>
                <Flex py={"4"} gap={"3"} flexDir={"column"} >
                    {firstnav?.map((item: string, index: number) => {
                        return (
                            <Flex as={"button"} onClick={() => setActive(item)} key={index} gap={"2"} color={active === item ? "#7875FF" : "#D0D5DD"} fontWeight={"500"} fontSize={"14px"} lineHeight={"27px"} alignItems={"center"} >
                                <Box width={"22px"}  >
                                    {item === "Dashboard" && (
                                        <Dashboard color={active === item ? "#7875FF" : ""} />
                                    )}
                                    {item === "Watch History" && (
                                        <Clock color={active === item ? "#7875FF" : ""} />
                                    )}
                                    {item === "Movie Genie" && (
                                        <Genie color={active === item ? "#7875FF" : ""} />
                                    )}
                                    {item === "Friends" && (
                                        <Heart color={active === item ? "#7875FF" : ""} />
                                    )}
                                </Box>
                                <Text>{item}</Text>
                            </Flex>
                        )
                    })}
                </Flex>
                <Flex mt={"3"} justifyContent={"space-between"} alignItems={"center"} >
                    <Text color={"#98A2B3"} fontSize={"14px"} lineHeight={"27px"} >Circle</Text>
                </Flex>
                <Flex py={"4"} gap={"3"} flexDir={"column"} >
                    {secondnav?.map((item: string, index: number) => {
                        return (
                            <Flex as={"button"} key={index} gap={"2"} color={active === item ? "#7875FF" : "#D0D5DD"} fontWeight={"500"} fontSize={"14px"} lineHeight={"27px"} alignItems={"center"} >
                                <Box width={"22px"}  >
                                    {item === "Best Couple" && (
                                        <OrangeCircle />
                                    )}
                                    {item === "Nova Squad" && (
                                        <PurpleCircle />
                                    )}
                                </Box>
                                <Text>{item}</Text>
                            </Flex>
                        )
                    })}
                </Flex>
                <Flex mt={"3"} justifyContent={"space-between"} alignItems={"center"} >
                    <Text color={"#98A2B3"} fontSize={"14px"} lineHeight={"27px"} >Account</Text>
                </Flex>
                <Flex py={"4"} gap={"3"} flexDir={"column"} >
                    {thirdnav?.map((item: string, index: number) => {
                        return (
                            <Flex as={"button"} key={index} gap={"2"} color={active === item ? "#7875FF" : "#D0D5DD"} fontWeight={"500"} fontSize={"14px"} lineHeight={"27px"} alignItems={"center"} >
                                <Box width={"22px"}  >
                                    {item === "My Profile" && (
                                        <User />
                                    )}
                                    {item === "Subscriptions" && (
                                        <Star />
                                    )}
                                </Box>
                                <Text>{item}</Text>
                            </Flex>
                        )
                    })}
                </Flex>
            </Flex>
            <Flex bgColor={"#141B25"} px={"6"} pb={"8"} pt={"4"} >
                <Flex py={"4"} gap={"3"} flexDir={"column"} >
                    <Flex as={"button"} gap={"2"} color={"#D0D5DD"} fontWeight={"500"} fontSize={"14px"} lineHeight={"27px"} alignItems={"center"} >
                        <Box width={"22px"}  >
                            <Logout />
                        </Box>
                        <Text>Log Out</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default PlatformSidebar
