import { Box, Flex, Text } from '@chakra-ui/react'
// import React from 'react'
import Navbar from '../../components/navbar'
import { colorPallette } from '../../theme/theme'
// import WatchPartyOption from '../../components/dashboardComponent/watchpartyoption'
import DashboardTab from '../../components/dashboardComponent/dashboardTab'

interface Props {}

function Dashboard(props: Props) {
    const {} = props

    return (
        <Flex w="full" h="100vh" overflowY={"hidden"} bg={colorPallette.black} >
            <Box width="full" h="100vh" borderRight="1px">
                <Navbar />
                <Box width="full" minHeight="100%" display={"flex"} bg="blue.300" >
                    <Text mt="auto" >Hello</Text>
                </Box>
            </Box>
            <Box w="fit-content" >
                <Box width="390px" position={"relative"} px="28px" h={"100vh"} overflowY={"auto"} >
                    <DashboardTab />
                </Box>
            </Box>
        </Flex>
    )
}

export default Dashboard
