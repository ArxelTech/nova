import { FormLabel, Button, Box } from '@chakra-ui/react' 
// import React from 'react' 
import InputComponent from '../../../inputComponent'

interface Props {
    next: any
}

function StepThree(props: Props) {
    const {
        next
    } = props

    const handleSubmit =(e: any)=> {
        e.preventDefault()
        next(3)
    }


    return ( 
        <form style={{width: "100%"}} onSubmit={(e)=> handleSubmit(e)}  > 
            <Box display={"flex"} flexDirection={"column"} gap={"20px"} >
                <Box width={"full"} > 
                    <FormLabel fontFamily={"700"} color={"brand.inactive"} fontSize={"sm"} >New Password</FormLabel>
                    <InputComponent type="password" placeholder="*************" right={true} />
                </Box>
                <Box width={"full"} > 
                    <FormLabel fontFamily={"700"} color={"brand.inactive"} fontSize={"sm"} >Confirm Password</FormLabel>
                    <InputComponent type="password" placeholder="*************" right={true} />
                </Box> 
                <Box width={"full"} display={"flex"} mt={"6px"} gap={"21px"} alignItems={"center"} >
                    <Button type="submit" bg={"brand.base"} color={"white"}  _hover={{ backgroundColor: "brand.base"}} _focus={{ backgroundColor: "brand.base"}}   >Set New Password</Button> 
                </Box>
            </Box>
        </form> 
    )
}

export default StepThree
