import { InputGroup, InputLeftElement, Input, InputRightElement, Box, Text } from "@chakra-ui/react"
import React from "react"
// import Icon from "../Icon";
// import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
    left?: boolean,
    leftIcon?: any,
    right?: boolean,
    rightIcon?: any,
    type: string,
    h?: string,
    touch?: any,
    error?: any, 
    [x: string]: any;
}

export default function InputComponent({left, leftIcon, right, rightIcon, type, touch, error, h, ...rest}: Props) {

    // const [showPassword, setShowPassword] = React.useState(false)
    const [intialType, setIntialType] = React.useState(type)

    const ViewPassword =()=> {
        if(intialType === "text"){
            setIntialType("password")
        } else {
            setIntialType("text")
        }
    }

    return ( 
        <> 
            <InputGroup >
                {left && ( 
                    <InputLeftElement 
                        children={
                            <Box display="flex" height={h ? h : "40 px"} justifyContent="center" alignItems="center" marginTop="10px"  marginLeft="12px" >
                                {leftIcon}
                            </Box>
                        } 
                    />
                )}
                <Input {...rest} type={intialType} textColor={"brand.gray300"} paddingLeft={left ? "40  px": ""} fontSize="md" fontWeight="350" bgColor="brand.black" borderColor="brand.inactive" _hover={{ borderColor: "brand.inactive"}} _focus={{ backgroundColor: "brand.black"}} focusBorderColor="#383837" height={h ? h : "50px"} />
                {right && ( 
                    <InputRightElement 
                        children={
                            <Box display="flex" height={h ? h : "40px"} justifyContent="center" alignItems="center" marginTop="10px" paddingRight="30px" marginLeft="12px" >
                                {!rightIcon ? 
                                    <Text as="button" onClick={()=> ViewPassword()} fontFamily={"700"} fontSize={"sm"} color={"brand.base"} >
                                        {intialType === "password" ? "Show": "Hide"} 
                                    </Text>
                                    : rightIcon
                                }
                            </Box>
                        }
                    /> 
                )}
            </InputGroup>
            {touch && error && (
                <Text as={motion.p}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }} color="#E84545" fontWeight="600" fontFamily="header" fontSize="xs" mt="3px" textAlign="left" >{error}</Text>
            )}
        </>
    )
}