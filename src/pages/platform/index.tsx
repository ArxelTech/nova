// import React from 'react'
import { Box, Flex, Grid } from '@chakra-ui/react'
import { colorPallette } from '../../theme/theme'
import Topbar from '../../components/sharedcomponent/topbar'
import PlatformType from '../../components/platfromComponent/platformType'
import PlatformSidebar from '../../components/platfromComponent/sidebar'

interface Props { }

function Platform(props: Props) {
    const { } = props

    return (
        // <DashboardLayout>
        <Grid h="100vh" w={"full"} position={"relative"} overflowY={["auto", "auto", "hidden"]} >
            <Flex w="full" h="full" overflow={"hidden"} bg={colorPallette.black} >

                <Flex width={["300px"]} left={"0px"} insetY={"0px"} bgColor={"#0D131B"} >
                    <Box width={["300px"]} position={"relative"} h={["100vh"]} overflowY={"auto"} >
                        <PlatformSidebar />
                    </Box>
                </Flex>
                <Flex flexDir={"column"} position={"relative"} flex={"1"} h="full" >
                    <Box width="full" position={"sticky"} display={["none", "none", "block"]} zIndex={"30"} top={"0px"} >
                        <Topbar user={true} />
                    </Box>
                    <PlatformType />
                </Flex>
            </Flex>
        </Grid >
    )
}

export default Platform
