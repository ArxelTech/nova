import { Spinner } from '@chakra-ui/react'
import React from 'react'

interface Props { 
    loading: any, 
    children: React.ReactNode,
    length?: any
  } 
  
function LoadingAnimation(props:Props) {

    let {
        children,
        loading,
        length
    } = props

    return (
        <>
            {!loading && (
                 children
            )}

            {!loading && (
                <>
                    {length === 0 && (
                        <div className="  w-full py-4 text-black text-xl flex justify-center   " >
                            <p>No Records Found</p>
                        </div> 
                    )}
                </>
            )} 
            {loading && ( 
                <div className=" w-full py-8 text-2xl flex justify-center text-text-active  " >
                    <Spinner size={["md", "sm"]} color='white' />
                </div>
            )}
        </>
    )
}

export default LoadingAnimation
