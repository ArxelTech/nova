import { Box } from '@chakra-ui/react'
import Chats from './chats'
import FriendsTab from './friends'
// import React from 'react'

interface Props {
    tab: boolean
}

function Infotab(props: Props) {

    const {
        tab
    } = props

    return (
        <Box w="full" flexWrap={"wrap"} overflowY={"auto"} flex={1} py="35px" px={"16px"} >
            {!tab && (
                <Chats />
            )}
            {tab && (
                <FriendsTab />
            )}
        </Box>
    )
}

export default Infotab
