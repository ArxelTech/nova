// import { Box } from '@chakra-ui/react'
import { Box, Button } from '@chakra-ui/react'
import StepOne from './components/stepone'
import StepThree from './components/stepthree'
import StepTwo from './components/steptwo'
import { useNavigate } from 'react-router-dom'
// import React from 'react'

interface Props {
    tab: number,
    setTab: any
}

function ForgotPasswordStepControl(props: Props) {
    const {
        tab,
        setTab
    } = props

    const navigate = useNavigate()

    return (
        <Box width={"full"} mt="30px" >
            {tab === 0 && (
                <StepOne next={setTab} />
            )}
            {tab === 1 && (
                <StepTwo next={setTab} />
            )}
            {tab === 2 && (
                <StepThree next={setTab} />
            )}
            {tab === 3 && ( 
                <Button onClick={()=> navigate("/")} bg={"brand.base"} color={"white"}  _hover={{ backgroundColor: "brand.base"}} _focus={{ backgroundColor: "brand.base"}}   >Login To Account</Button>
            )}
        </Box>
    )
}

export default ForgotPasswordStepControl
