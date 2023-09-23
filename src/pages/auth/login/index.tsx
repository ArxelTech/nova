import AuthLayout from "../../../components/authComponent/authLayout"
import { Box, FormLabel, Link, useToast } from "@chakra-ui/react"
import InputComponent from "../../../components/authComponent/inputComponent"
// import { useHistory } from "react-router-dom" 
import * as yup from "yup";
import { useFormik } from "formik"
import useAuth from "../../../hooks/useAuth";
import SubmitBtn from "../../../components/submitbtn";

const loginSchema = yup.object({ 
    email: yup.string().email('This email is not valid').required('Your email is required'),
    password: yup.string().required('Your password is required').min(6, 'A minimium of 6 characters')
}) 

function LoginPage() {    
    
    const toast = useToast() 
    // const navigate = useHistory() 

    const { login, isLoading } = useAuth()

    const formik = useFormik({
        initialValues: {email: '', password: ''},
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
            login(formik.values)
        }
    }

    return (
        <AuthLayout title="Welcome Back" body="Don’t have an account?" linklabel="Sign Up" link="/register" >
            <Box width={"full"} mt="30px" >
                <form style={{width: "100%"}} onSubmit={(e)=> handleSubmit(e)}> 
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
                            <SubmitBtn name="Log In" loading={isLoading} />
                            <Link href="/forgot-password" color={"brand.base"} fontFamily={"500"} >Forgot Password</Link>
                        </Box>
                    </Box>
                </form>
            </Box>
        </AuthLayout>
    )
}

export default LoginPage