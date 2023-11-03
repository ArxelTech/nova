// import React from 'react'
import DashboardLayout from '../dashboardLayout'
import { Box, Text } from '@chakra-ui/react' 
import Topbar from '../../sharedcomponent/topbar'
import Sidebar from '../dashboardLayout/component/sidebar'

interface Props { 
    children: React.ReactNode; 
}

function DashboardPage(props: Props) {
    const {children} = props

    return (
        <DashboardLayout> 
            <Box width="full" h="full" position={"relative"} flex={1} borderRight="1px">
                <Box width="full" position={"absolute"} zIndex={"30"} top={"0px"} >
                    <Topbar user={true} /> 
                </Box>
                <Box  width="full" h={"full"} pt={"130px"} > 
                    <Box width="full" h={"full"} overflowY={"auto"} pt={"30px"} px={"32px"} >
                        <Text color={"brand.gray300"} fontFamily={"500"} fontSize={"18px"} >Join your friends having watch parties</Text>
                        {children}
                    </Box>
                </Box>
            </Box>
            <Box w="fit-content" >
                <Box width="390px" position={"relative"} h={"full"} > 
                    <Sidebar />
                </Box>
            </Box> 
        </DashboardLayout>
    )
}

export default DashboardPage
