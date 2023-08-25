import { Box, Flex, Grid } from '@chakra-ui/react'
import Navbar from './component/navbar'
// import Topbar from '../../topbar'
// import Sidebar from './component/sidebar';
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
                {children}
            </Flex>
        </Grid> 
        </IonPage>
    )
}

export default DashboardLayout
