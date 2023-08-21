import { FormLabel, Button, Box, Link } from '@chakra-ui/react' 
// import React from 'react' 
import InputComponent from '../../../inputComponent'

interface Props {
    next: any
}

function StepOne(props: Props) {
    const {
        next
    } = props

    const handleSubmit =(e: any)=> {
        e.preventDefault()
        next(1)
    }

    return ( 
        <form  style={{width: "100%"}} onSubmit={(e)=> handleSubmit(e)}  > 
            <Box display={"flex"} flexDirection={"column"} gap={"20px"} >
                <Box width={"full"} > 
                    <FormLabel fontFamily={"700"} color={"brand.inactive"} fontSize={"sm"} >Email Address</FormLabel>
                    <InputComponent placeholder="michael@novaapp.io" type="email" />
                </Box> 
                <Box width={"full"} display={"flex"} mt={"6px"} gap={"21px"} alignItems={"center"} >
                    <Button type="submit" bg={"brand.base"} color={"white"}  _hover={{ backgroundColor: "brand.base"}} _focus={{ backgroundColor: "brand.base"}}   >Send Reset Code</Button>
                    <Link href="/" color={"brand.base"} fontFamily={"500"} >Login</Link>
                </Box>
            </Box>
        </form> 
    )
}

export default StepOne
