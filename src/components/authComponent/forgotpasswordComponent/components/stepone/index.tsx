import { FormLabel, Button, Box, Link, useToast } from '@chakra-ui/react' 
// import React from 'react' 
import InputComponent from '../../../inputComponent'
import { useFormik } from 'formik'
import useAuth from '../../../../../hooks/useAuth'
import * as yup from "yup";

interface Props {
    next: Function,
    setEmail: Function
}

const loginSchema = yup.object({ 
    email: yup.string().email('This email is not valid').required('Your email is required'), 
}) 


function StepOne(props: Props) {
    const {
        next,
        setEmail
    } = props 
 
    const toast = useToast()  

    const { sendPasswordResetOtp } = useAuth()

    const formik = useFormik({
        initialValues: {email: '',},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });  

    const handleSubmit =(e: any)=> {
        e.preventDefault()

    
        if (!formik.dirty) { 
            toast({
                title: "You have to fill in the form to continue",
                position: "bottom",
                status: "error",
                isClosable: true,
            }) 
            return;
        }else if (!formik.isValid) { 
            toast({
                title: "You have to fill in the form to continue",
                position: "bottom",
                status: "error",
                isClosable: true,
            })
          return;
        } else {
            sendPasswordResetOtp(formik.values, next)
            setEmail(formik.values.email)
            // next(1)
        }
    }

    return ( 
        <form  style={{width: "100%"}} onSubmit={(e)=> handleSubmit(e)}  > 
            <Box display={"flex"} flexDirection={"column"} gap={"20px"} >
                <Box width={"full"} > 
                    <FormLabel fontFamily={"700"} color={"brand.inactive"} fontSize={"sm"} >Email Address</FormLabel>
                    <InputComponent 
                        name="email"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("email", true, true)
                        } 
                        touch={formik.touched.email}
                        error={formik.errors.email}
                        placeholder="michael@novaapp.io" type="email" />
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
