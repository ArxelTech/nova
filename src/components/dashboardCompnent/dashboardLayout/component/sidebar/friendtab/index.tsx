// import React from 'react'
import AddedTab from './addedtab'
import PendingTab from './pendingtab'
import RequestFriendTab from './requesttab'

interface Props {
    tab: number
}

function FriendTab(props: Props) {
    const {
        tab
    } = props

    return (
        <>
            {tab === 0 && (
                <AddedTab />
            )}
            {tab === 1 && (
                <PendingTab />
            )}
            {tab === 2 && (
                <RequestFriendTab />
            )}
        </>
    )
}

export default FriendTab
