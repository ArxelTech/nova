// import { Box } from '@chakra-ui/react'
// import React from 'react'
import DashboardLayout from '../../components/dashboardCompnent/dashboardLayout'
import MovieTile from '../../components/dashboardCompnent/movieTiles'

interface Props {}

function Dashboard(props: Props) {
    const {} = props

    return (
        <DashboardLayout>
            <MovieTile />
        </DashboardLayout>
    )
}

export default Dashboard
