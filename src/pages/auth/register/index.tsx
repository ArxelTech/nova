/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormLabel, Box, useToast } from '@chakra-ui/react' 
// import React from 'react' 
import AuthLayout from '../../../components/authComponent/authLayout'
import InputComponent from '../../../components/authComponent/inputComponent'
// import { useHistory } from 'react-router-dom'
import * as yup from "yup";
import { useFormik } from "formik"
import useAuth from '../../../hooks/useAuth';
import SubmitBtn from '../../../components/submitbtn';

// interface Props {}

const loginSchema = yup.object({ 
    email: yup.string().email('This email is not valid').required('Your email is required'),
    firstName: yup.string().required('Required'),
    lastName: yup.string().required('Required'),
    password: yup.string().required('Your password is required').min(6, 'A minimium of 6 characters')
}) 

function RegistrationPage() {
    // const {} = props  
    const toast = useToast()  
    const { register, isLoading } = useAuth()

    const formik = useFormik({
        initialValues: {email: '', password: '', firstName: '', lastName: ''},
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
            register(formik.values)
        }
    }

    return (
        <AuthLayout title="Create Account" body="Already have an account?" linklabel="Login" link="/" >
            <Box width={"full"} mt="30px" >
                <form style={{width: "100%"}} onSubmit={(e)=> handleSubmit(e)}> 
                    <Box display={"flex"} flexDirection={"column"} gap={"20px"} >
                        <Box width={"full"} > 
                            <FormLabel fontFamily={"700"} color={"brand.inactive"} fontSize={"sm"} >First Name</FormLabel>
                            <InputComponent
                                name="firstName"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("firstName", true, true)
                                } 
                                touch={formik.touched.firstName}
                                error={formik.errors.firstName}
                                type="text" placeholder="First-Name" />
                        </Box>
                        <Box width={"full"} > 
                            <FormLabel fontFamily={"700"} color={"brand.inactive"} fontSize={"sm"} >Last Name</FormLabel>
                            <InputComponent 
                                name="lastName"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("lastName", true, true)
                                } 
                                touch={formik.touched.lastName}
                                error={formik.errors.lastName}
                                type="text" placeholder="Last-Name" />
                        </Box>
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
                                type="email" placeholder="michael@novaapp.io" />
                        </Box>
                        <Box width={"full"} > 
                            <FormLabel fontFamily={"700"} color={"brand.inactive"} fontSize={"sm"} >Password</FormLabel>
                            <InputComponent 
                                name="password"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("password", true, true)
                                } 
                                touch={formik.touched.password}
                                error={formik.errors.password}
                                type="password" placeholder="*************" right={true} />
                        </Box>
                        <Box width={"full"} display={"flex"} mt={"6px"} gap={"21px"} alignItems={"center"} >
                            {/* <Button type="submit" bg={"brand.base"} color={"white"}  _hover={{ backgroundColor: "brand.base"}} _focus={{ backgroundColor: "brand.base"}}   >Create Account</Button>  */}
                            <SubmitBtn name="Create Account" loading={isLoading} />
                        </Box>
                    </Box>
                </form>
            </Box>
        </AuthLayout>
    )
}

export default RegistrationPage
