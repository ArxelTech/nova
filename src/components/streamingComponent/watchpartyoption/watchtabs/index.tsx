import { Box } from '@chakra-ui/react' 
import RequestTab from './request'
import TalkTab from './talk'
import ShareTab from './share'

interface Props {
    tab: number
}

function WatchTabs(props: Props) {
    const {
        tab
    } = props

    return (
        <Box w={"full"} >
            {tab === 0 && (
                <ShareTab />
            )}
            {tab === 2 && (
                <TalkTab />
            )}
            {tab === 3 && (
                <RequestTab />
            )}
        </Box>
    )
}

export default WatchTabs
