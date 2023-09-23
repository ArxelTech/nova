import { FormLabel, Button, Box, useToast } from '@chakra-ui/react' 
import React from 'react' 
import InputComponent from '../../../inputComponent'
import { useFormik } from 'formik'
import useAuth from '../../../../../hooks/useAuth'
import * as yup from "yup";

interface Props {
    next: any,
    email: string,
    otp: string
}

const loginSchema = yup.object({ 
    password: yup.string().required('Your password is required').min(6, 'A minimium of 6 characters'),
    confirmPassword: yup.string().required('Your password is required').min(6, 'A minimium of 6 characters')
}) 

function StepThree(props: Props) {
    const {
        next,
        email,
        otp,

    } = props
 
    const toast = useToast()  

    const { resetPassword } = useAuth()

    const formik = useFormik({
        initialValues: {password: '', confirmPassword: '', userId: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });  

    React.useEffect(()=>{
        formik.setFieldValue("userId", email)
    },[])
    
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
            resetPassword(formik.values, next) 
            // next(1)
        }
    } 

    console.log(otp, email); 


    return ( 
        <form style={{width: "100%"}} onSubmit={(e)=> handleSubmit(e)}  > 
            <Box display={"flex"} flexDirection={"column"} gap={"20px"} >
                <Box width={"full"} > 
                    <FormLabel fontFamily={"700"} color={"brand.inactive"} fontSize={"sm"} >New Password</FormLabel>
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
                <Box width={"full"} > 
                    <FormLabel fontFamily={"700"} color={"brand.inactive"} fontSize={"sm"} >Confirm Password</FormLabel>
                    <InputComponent 
                        name="confirmPassword"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("confirmPassword", true, true)
                        }  
                        touch={formik.touched.confirmPassword}
                        error={formik.errors.confirmPassword}
                        type="confirmPassword" placeholder="*************" right={true} />
                </Box> 
                <Box width={"full"} display={"flex"} mt={"6px"} gap={"21px"} alignItems={"center"} >
                    <Button type="submit" bg={"brand.base"} color={"white"}  _hover={{ backgroundColor: "brand.base"}} _focus={{ backgroundColor: "brand.base"}}   >Set New Password</Button> 
                </Box>
            </Box>
        </form> 
    )
}

export default StepThree
