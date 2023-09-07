/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormLabel, Button, Box, Flex, Image, Text } from '@chakra-ui/react' 
// import React from 'react'
import { useHistory } from 'react-router-dom'
import AuthLayout from '../../components/authComponent/authLayout'
import InputComponent from '../../components/authComponent/inputComponent'
import React from 'react'

// interface Props {}

function JoinParty() {
    // const {} = props

    const navigate = useHistory()
    const [tab, setTab] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    const handleSubmit =(e: any)=> {
        e.preventDefault()
        setLoading(true)
        const t1 = setTimeout(() => {  
            setTab(true)
            clearTimeout(t1);
        }, 2000); 

        const t2 = setTimeout(() => {  
            navigate.push("/streaming") 
            clearTimeout(t2);
        }, 4000);  
    }


    return (
        <AuthLayout dashboard={true} title={!tab ? "Join Watch Party" :"Joining Watch Party" } body={!tab ? "Please enter a room ID to join a party session" : ""}  >
            {!tab && (
                <Box width={"full"} mt="30px" >
                    <form style={{width: "100%"}} onSubmit={(e)=> handleSubmit(e)}> 
                        <Box display={"flex"} flexDirection={"column"} gap={"20px"} > 
                            <Box width={"full"} > 
                                <FormLabel fontFamily={"700"} color={"brand.inactive"} fontSize={"sm"} >Room ID</FormLabel>
                                <InputComponent type="number" placeholder="000-0000"/>
                            </Box>
                            <Box width={"full"} display={"flex"} mt={"6px"} gap={"21px"} alignItems={"center"} >
                                <Button bg={"brand.base"} color={"white"}  _hover={{ backgroundColor: "brand.base"}} _focus={{ backgroundColor: "brand.base"}}   >
                                    {loading ? "Loading" : "Join Watch Party"}    
                                </Button> 
                            </Box>
                        </Box>
                    </form>
                </Box>
            )}
            {tab && (
                <Flex width={"full"} rounded={"8px"} gap={"8px" }mt="30px"  px={"8px"} py={"12px"} bg={"brand.btnbg"} >
                    <Box w={"fit-content"} >
                        <Image src={"/images/popcorn.gif"} alt="image" w={"103px"} />
                    </Box>
                    <Box>
                        <Text color={"brand.gray200"} fontFamily={"700"} >The host will let you in soon</Text>
                        <Text color={"brand.gray200"} fontFamily={"400"} >Sit back, relax and grab a popcorn and your favorite drink, the host will let you in soon</Text>
                    </Box>
                </Flex>
            )}
        </AuthLayout>
    )
}

export default JoinParty
