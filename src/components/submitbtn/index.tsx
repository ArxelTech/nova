import { Button } from '@chakra-ui/react'
// import React from 'react'

interface Props {
    loading: boolean,
    name: string, 
    [x: string]: any;
}

function SubmitBtn(props: Props) {
    const {
        loading,
        name,
        ...rest
    } = props

    return (
        <Button {...rest} type="submit" bg={"brand.base"} color={"white"}  _hover={{ backgroundColor: "brand.base"}} _focus={{ backgroundColor: "brand.base"}}   >
            {loading ? "Loading": name}
        </Button>
    )
}

export default SubmitBtn
