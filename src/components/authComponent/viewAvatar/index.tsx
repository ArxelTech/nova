import { Box, Grid, Image, Text } from '@chakra-ui/react'
// import React from 'react'
import { useQuery } from 'react-query';
import axiosInstance from '../../../services/axiosInstance';
import LoadingAnimation from '../../loadingAnimation';

interface Props {
    close: any,
    getdata: any
 }

function ViewAvatar(props: Props) {
    const {
        close,
        getdata
    } = props


    const { isLoading, data } = useQuery(['avatars'], () => axiosInstance.get('/media/avatars'))

    console.log(data);
    const clickHandler =(item: string) => {
        getdata(item)
        close(false)
    }


    return (
        <Box width={"full"} position={"relative"} pt={["140px", "160px", "0px"]}  >
            <Box bgColor="#0A1018" display={"flex"} w={"full"} height={["140px", "140px", "auto"]} position={["fixed", "fixed", "sticky"]} alignItems={["center", "center" , "center"]} justifyContent={"space-between"} top={"0px"} pt={["10px", "10px", "40px"]} pb={["0px", "0px", "28px"]} borderBottom={"1px"} borderBottomColor={"#FFFFFF1A"} px={"30px"} >
                <Box>
                    <Text fontSize={"32px"} fontWeight={"700"} color={"white"} >Choose Avatar</Text>
                    <Text fontSize={"16px"} fontWeight={"400"} color={"#D0D5DD"} >Select an avatar that matches your vibe</Text>
                </Box>
                <Box cursor={"pointer"} border={"0px"} onClick={()=> close(false)}  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="white" />
                        <path d="M9.17035 15.5801C8.98035 15.5801 8.79035 15.5101 8.64035 15.3601C8.35035 15.0701 8.35035 14.5901 8.64035 14.3001L14.3004 8.64011C14.5904 8.35011 15.0704 8.35011 15.3604 8.64011C15.6504 8.93011 15.6504 9.41011 15.3604 9.70011L9.70035 15.3601C9.56035 15.5101 9.36035 15.5801 9.17035 15.5801Z" fill="white" />
                        <path d="M14.8304 15.5801C14.6404 15.5801 14.4504 15.5101 14.3004 15.3601L8.64035 9.70011C8.35035 9.41011 8.35035 8.93011 8.64035 8.64011C8.93035 8.35011 9.41035 8.35011 9.70035 8.64011L15.3604 14.3001C15.6504 14.5901 15.6504 15.0701 15.3604 15.3601C15.2104 15.5101 15.0204 15.5801 14.8304 15.5801Z" fill="white" />
                    </svg>
                </Box>
            </Box>
            <Grid templateColumns={['repeat(4, 1fr)', 'repeat(4, 1fr)', 'repeat(6, 1fr)']} gap={"10px"} w={"full"} p={"32px"}  >
                <LoadingAnimation loading={isLoading} length={data?.data?.data?.resources?.length} >
                    {data?.data?.data?.resources?.map((item: any, index: number) => {
                        return (
                            <Box onClick={()=> clickHandler(item?.secure_url)} key={index} h={"165px"} w={"full"} cursor={"pointer"} rounded={"8px"} >
                                <Image w={"full"} h={"full"} objectFit={"cover"} src={item?.secure_url} rounded={"8px"} />
                            </Box>
                        )
                    })}
                </LoadingAnimation>
            </Grid>
        </Box>
    )
}

export default ViewAvatar
