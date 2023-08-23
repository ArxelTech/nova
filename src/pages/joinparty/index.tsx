import { FormLabel, Button, Box } from '@chakra-ui/react' 
// import React from 'react'
import { useNavigate } from 'react-router-dom'
import AuthLayout from '../../components/authComponent/authLayout'
import InputComponent from '../../components/authComponent/inputComponent'

interface Props {}

function JoinParty(props: Props) {
    const {} = props

    const navigate = useNavigate()

    const handleSubmit =(e: any)=> {
        e.preventDefault()
        navigate("/streaming")
    }

    return (
        <AuthLayout dashboard={true} title="Join Watch Party" body="Please enter a room ID to join a party session"  >
            <Box width={"full"} mt="30px" >
                <form style={{width: "100%"}} onSubmit={(e)=> handleSubmit(e)}> 
                    <Box display={"flex"} flexDirection={"column"} gap={"20px"} > 
                        <Box width={"full"} > 
                            <FormLabel fontFamily={"700"} color={"brand.inactive"} fontSize={"sm"} >Room ID</FormLabel>
                            <InputComponent type="number" placeholder="000-0000"/>
                        </Box>
                        <Box width={"full"} display={"flex"} mt={"6px"} gap={"21px"} alignItems={"center"} >
                            <Button bg={"brand.base"} color={"white"}  _hover={{ backgroundColor: "brand.base"}} _focus={{ backgroundColor: "brand.base"}}   >Join Watch Party</Button> 
                        </Box>
                    </Box>
                </form>
            </Box>
        </AuthLayout>
    )
}

export default JoinParty
