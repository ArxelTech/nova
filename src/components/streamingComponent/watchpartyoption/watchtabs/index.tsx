import { Box } from '@chakra-ui/react' 
import RequestTab from './request'
import TalkTab from './talk'
import ShareTab from './share'

interface Props {
    tab: number,
    max:  any,
    show: boolean
}

function WatchTabs(props: Props) {
    const {
        tab,
        show,
        max
    } = props

    return (
        <Box w={"full"} h={"full"} >
            {!show && (
                <> 
                    {tab === 0 && (
                        <ShareTab />
                    )}
                    {tab === 2 && (
                        <TalkTab max={max} />
                    )}
                    {tab === 3 && (
                        <RequestTab />
                    )}
                </>
            )}
        </Box>
    )
}

export default WatchTabs
