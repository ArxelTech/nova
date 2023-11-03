/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Box } from '@chakra-ui/react'
import { Box, Button } from '@chakra-ui/react'
import StepOne from './components/stepone'
import StepThree from './components/stepthree'
import StepTwo from './components/steptwo'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
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

    const navigate = useHistory()
    const [email, setEmail] = useState("")
    const [otp, setOtp] = useState("")

    return (
        <Box width={"full"} mt="30px" >
            {tab === 0 && (
                <StepOne next={setTab} setEmail={setEmail} />
            )}
            {tab === 1 && (
                <StepTwo next={setTab} setOtp={setOtp} />
            )}
            {tab === 2 && (
                <StepThree otp={otp} email={email} next={setTab} />
            )}
            {tab === 3 && ( 
                <Button onClick={()=> navigate.push("/")} bg={"brand.base"} color={"white"}  _hover={{ backgroundColor: "brand.base"}} _focus={{ backgroundColor: "brand.base"}}   >Login To Account</Button>
            )}
        </Box>
    )
}

export default ForgotPasswordStepControl
