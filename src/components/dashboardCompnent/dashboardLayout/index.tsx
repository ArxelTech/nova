import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import Navbar from './component/navbar'
import Topbar from '../../topbar'
import Sidebar from './component/sidebar';
import { IonPage } from '@ionic/react'
// import React from 'react'

interface Props { 
    children: React.ReactNode; 
}

function DashboardLayout(props: Props) {
    const {
        children
    } = props

    return (
        <IonPage className='w-full h-screen bg-red-300'>
            <Grid h="100vh" w={"full"}  overflowY={"hidden"} > 
            <Box width="full" position={"absolute"} zIndex={"30"} top={"0px"} >
                <Navbar />   
            </Box>
            <Flex w="full" h="full" pt={"100px"} overflowY={"hidden"} bg={"brand.black"} >
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
            </Flex>  
        </Grid> 
        </IonPage>
    )
}

export default DashboardLayout
