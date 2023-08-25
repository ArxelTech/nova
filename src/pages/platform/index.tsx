// import React from 'react'
import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import DashboardLayout from '../../components/dashboardCompnent/dashboardLayout'
import { useNavigate } from 'react-router-dom'

interface Props {}

function Platform(props: Props) {
    const {} = props

    const navigate = useNavigate()

    return (
        <DashboardLayout>
            <Box w={"full"} p={"32px"} overflowY={"auto"} >
                <Flex alignItems={"center"} gap={"10px"} > 
                    <Box onClick={()=> navigate("/dashboard")} as="button" > 
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 38.5C30.665 38.5 38.5 30.665 38.5 21C38.5 11.335 30.665 3.5 21 3.5C11.335 3.5 3.5 11.335 3.5 21C3.5 30.665 11.335 38.5 21 38.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M27.125 21H16.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.125 15.75L14.875 21L20.125 26.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Box> 
                    <Box>
                        <Text color="brand.gray300" fontSize={"32px"} fontFamily={"700"} >Select a platform</Text>
                        <Text color="gray.200" fontSize={"14px"} fontFamily="400" >Choose a platform where the content you want to watch with friends is available</Text>
                    </Box>
                </Flex>
                <Flex w={"full"} borderBottom={"1px"} py={"50px"} gap={"32px"} px={"42px"} >
                    <Box  as={"button"} onClick={()=> navigate("/streaming")}  rounded={"8px"} border={"1px"} _hover={{borderColor:"brand.base"}} py={"19px"} px={"25px"} w={"fit-content"} >
                        <svg width="248" height="131" viewBox="0 0 248 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_137_1103)">
                                <path d="M216.704 61.9502L227.916 91.6346C224.611 91.1627 221.309 90.5716 217.947 90.039L211.631 73.6372L205.142 88.6851C201.957 88.1525 198.828 87.9751 195.643 87.5616L207.03 61.5973L196.702 34.9851H206.261L212.042 49.8538L218.239 34.9851H227.914L216.704 61.9502ZM189.153 34.9851H180.479V86.4418C183.312 86.6194 186.261 86.7363 189.153 87.0894V34.9851ZM172.986 85.8508C165.08 85.3201 157.173 84.85 149.09 84.6706V34.9853H157.94V76.292C163.015 76.4092 168.088 76.8209 172.986 77.0569V85.8508ZM139.648 55.1089V63.9594H127.553V84.0813H118.822V34.9851H143.603V43.8356H127.555V55.1091H139.65L139.648 55.1089ZM103.952 43.8356V84.5534C101.001 84.5534 97.993 84.5534 95.1003 84.6706V43.8356H85.9546V34.9851H113.154V43.8356H103.952ZM76.3971 64.4297C72.5038 64.4297 67.9006 64.4297 64.5965 64.6091V77.7668C69.7887 77.4118 74.9809 77.0001 80.2315 76.8227V85.3201L55.747 87.2689V34.9851H80.2299V43.8356H64.5962V55.7565C68.0193 55.7565 73.2701 55.5792 76.3967 55.5792V64.4315L76.3971 64.4297ZM27.3633 59.4728V90.394C24.18 90.7489 21.3459 91.1625 18.3381 91.6346V34.9851H26.7761L38.2805 67.1472V34.9851H47.1317V87.9751C44.0049 88.5077 40.818 88.6851 37.4553 89.1554L27.3633 59.4728Z" fill="#474D55"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_137_1103">
                                    <rect width="209.577" height="56.7606" fill="white" transform="translate(18.3381 34.9297)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </Box>
                    <Box rounded={"8px"} border={"1px"} _hover={{borderColor:"brand.base"}} py={"19px"} px={"25px"} w={"fit-content"} >
                        <svg width="237" height="125" viewBox="0 0 237 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_137_1149)">
                                <path d="M51.8206 88.2694C50.2205 87.7203 49.1267 86.9756 47.7914 85.5289C44.9865 82.4896 44.8324 81.5823 44.8324 68.0856C44.8324 55.0808 45.0321 53.8561 47.6452 50.8024C51.309 46.5225 59.7807 46.6491 63.3986 51.0376C65.8013 53.9527 65.9966 55.2505 65.9966 68.2852C65.9966 78.6014 65.9071 80.3209 65.2778 82.1258C64.313 84.8899 61.4702 87.5642 58.5859 88.4208C55.8657 89.2286 54.526 89.199 51.8206 88.269V88.2694ZM56.7942 82.0136C58.4274 81.3867 58.6091 80.0146 58.6091 68.324C58.6091 60.8638 58.4589 56.8123 58.1579 56.1518C57.1476 53.9339 53.6814 53.9339 52.6711 56.1518C52.37 56.8123 52.2199 60.8638 52.2199 68.324C52.2199 81.3679 52.3864 82.1246 55.2819 82.2304C55.7583 82.2476 56.4388 82.1498 56.7942 82.0136ZM74.5349 88.0506C73.9599 87.7383 73.1509 86.8015 72.738 85.9701C72.0412 84.5677 71.9781 83.1333 71.8678 66.1888L71.7493 47.9197H79.3739V64.6422C79.3739 78.9552 79.4594 81.4366 79.9677 81.8579C80.8526 82.5922 82.2902 82.0547 83.9159 80.3816L85.3638 78.8909V47.9201H92.951V88.2518H85.3638V84.1907L83.467 85.8747C82.424 86.8007 80.992 87.8042 80.2852 88.1049C78.6376 88.8049 75.8755 88.7786 74.5349 88.0506ZM28.2553 77.1698L28.2493 66.0886L23.3148 50.3153L18.3804 34.5419L22.3896 34.4273C24.7364 34.3603 26.4998 34.4769 26.6428 34.7085C26.7774 34.9261 28.05 39.5143 29.4708 44.9044C30.8924 50.2945 32.1455 54.7054 32.2569 54.7062C32.3687 54.707 33.4157 51.0692 34.5841 46.6215C35.753 42.1742 36.9769 37.592 37.3047 36.4387L37.9009 34.3423H42.1082C45.536 34.3423 46.2764 34.4453 46.1027 34.8973C45.9857 35.2024 43.7199 42.3827 41.0684 50.8531L36.2473 66.2539V88.251H28.2608L28.2553 77.1698Z" fill="white"/>
                                <path d="M132.137 103.806C112.628 103.155 107.345 101.767 103.754 96.3437C102.302 94.153 100.674 89.2501 100.155 85.5109C98.3339 72.3867 98.7811 45.0194 100.97 35.587C102.952 27.045 107.613 22.8605 116.117 21.9888C124.47 21.1322 146.245 20.6658 167.425 20.8894C190.291 21.1306 201.056 21.6198 204.951 22.5946C212.571 24.5005 216.267 30.113 217.555 41.7302C217.799 43.9265 218.098 51.5943 218.221 58.7693C218.713 87.7343 216.534 96.9487 208.23 101.017C205.094 102.554 203.042 102.907 194.179 103.436C184.553 104.01 145.27 104.245 132.137 103.806ZM141.734 88.0186C142.407 87.67 143.746 86.6593 144.709 85.7704L146.46 84.1572V88.2518H154.048V48.3194H146.46V78.7735L144.716 80.5173C142.844 82.3898 142.087 82.6234 141.098 81.6346C140.548 81.0844 140.471 78.9887 140.471 64.6634V48.319H132.883V65.6173C132.883 84.6998 133.04 86.2097 135.187 87.8118C136.546 88.8257 139.964 88.9335 141.734 88.0186ZM178.252 87.8896C178.949 87.4648 179.915 86.2804 180.449 85.1958C181.385 83.2934 181.404 83.0315 181.536 70.0902C181.679 55.9014 181.451 53.3393 179.784 50.4634C178.858 48.8653 176.65 47.5204 174.951 47.5204C173.314 47.5204 170.969 48.6213 169.182 50.2286L167.226 51.9868V34.742H160.038V88.2514H167.226V84.5649L168.865 86.046C169.767 86.8602 171.07 87.7726 171.76 88.0729C173.614 88.8804 176.774 88.7913 178.252 87.8896ZM168.723 81.3759L167.225 80.5077V56.0172L168.998 55.0772C170.435 54.3145 170.981 54.2118 171.893 54.5317C173.862 55.2233 174.074 56.7488 173.937 69.2188L173.814 80.3352L172.694 81.2984C171.322 82.478 170.648 82.4912 168.723 81.3759ZM202.366 87.819C206.225 86.0695 207.963 83.1109 208.267 77.7728L208.466 74.2755H200.768V76.6459C200.768 79.549 200.318 80.8172 198.976 81.6965C197.464 82.6868 195.585 82.0575 194.68 80.257C194.133 79.1704 193.981 77.8462 193.981 74.1753L193.98 69.4832H208.355V63.6199C208.355 56.2404 207.778 53.8884 205.29 51.1211C203.091 48.676 200.736 47.7025 197.174 47.768C194.222 47.8219 192.249 48.5578 190.177 50.3771C186.791 53.3509 186.277 56.0004 186.48 69.4836C186.612 78.2444 186.757 80.3788 187.325 81.8854C188.296 84.4579 190.051 86.4165 192.46 87.6173C195.175 88.9694 199.628 89.0605 202.366 87.819ZM193.98 60.4852C193.98 55.5184 195.254 53.8237 198.461 54.5281C200.071 54.8819 200.769 56.6837 200.769 60.4856V63.4933H193.98V60.4856L193.98 60.4852ZM125.296 65.2907V42.3296H134.081V34.7424H108.924V42.3296H117.31V88.2518H125.296V65.2907Z" fill="#474D55"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_137_1149">
                                    <rect width="200" height="83.2" fill="white" transform="translate(18.3333 20.8333)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </Box>
                </Flex>
                <Box w={"full"} py={"30px"} >
                    <Text fontFamily={"500"} color={"brand.gray300"} >Coming Soon</Text>
                    <Grid py={"20px"} templateColumns='repeat(4, 1fr)' gap={"20px"}>
                        <Box rounded={"8px"} border={"1px"} _hover={{borderColor:"brand.base"}} py={"19px"} px={"25px"} w={"full"} >
                            <svg width="248" height="131" viewBox="0 0 248 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_137_1103)">
                                    <path d="M216.704 61.9502L227.916 91.6346C224.611 91.1627 221.309 90.5716 217.947 90.039L211.631 73.6372L205.142 88.6851C201.957 88.1525 198.828 87.9751 195.643 87.5616L207.03 61.5973L196.702 34.9851H206.261L212.042 49.8538L218.239 34.9851H227.914L216.704 61.9502ZM189.153 34.9851H180.479V86.4418C183.312 86.6194 186.261 86.7363 189.153 87.0894V34.9851ZM172.986 85.8508C165.08 85.3201 157.173 84.85 149.09 84.6706V34.9853H157.94V76.292C163.015 76.4092 168.088 76.8209 172.986 77.0569V85.8508ZM139.648 55.1089V63.9594H127.553V84.0813H118.822V34.9851H143.603V43.8356H127.555V55.1091H139.65L139.648 55.1089ZM103.952 43.8356V84.5534C101.001 84.5534 97.993 84.5534 95.1003 84.6706V43.8356H85.9546V34.9851H113.154V43.8356H103.952ZM76.3971 64.4297C72.5038 64.4297 67.9006 64.4297 64.5965 64.6091V77.7668C69.7887 77.4118 74.9809 77.0001 80.2315 76.8227V85.3201L55.747 87.2689V34.9851H80.2299V43.8356H64.5962V55.7565C68.0193 55.7565 73.2701 55.5792 76.3967 55.5792V64.4315L76.3971 64.4297ZM27.3633 59.4728V90.394C24.18 90.7489 21.3459 91.1625 18.3381 91.6346V34.9851H26.7761L38.2805 67.1472V34.9851H47.1317V87.9751C44.0049 88.5077 40.818 88.6851 37.4553 89.1554L27.3633 59.4728Z" fill="#474D55"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_137_1103">
                                        <rect width="209.577" height="56.7606" fill="white" transform="translate(18.3381 34.9297)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </Box>
                    </Grid>
                </Box>
            </Box>
        </DashboardLayout>
    )
}

export default Platform
