import React from "react" 
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton
} from "@chakra-ui/react"

interface Props {
  open: any,
  close: any,
  size?: any,
  title: any, 
  hide?: boolean,
  height?: boolean,
  children: React.ReactNode
} 

export default function ModalLayout(props: Props) {
 
    let {
        open,
        close, 
        size,
        title,
        hide,
        children,
        height
    } = props;   

    return (
        <Modal size={size ? size : "md"} isCentered scrollBehavior="inside" isOpen={open} onClose={close}>
        <ModalOverlay />
        <ModalContent bgColor="#0A1018">
          {!hide && (
            <> 
              <ModalHeader><p className=" font-semibold  text-[#344054] text-[22px] lg:text-base lg:w-[70%] " >{title}</p></ModalHeader>
              <ModalCloseButton backgroundColor="#fff" borderRadius="1000px" color={"#344054"} />
            </>
          )}
          <ModalBody bgColor="#0A1018" padding="0px" rounded={"16px"} borderBottomRadius="8px" >
            <div className={size === "full" ? "  h-[100vh]" :!height ? " overflow-y-auto lg:max-h-[60vh] max-h-auto relative  ": " overflow-y-auto  relative  "} >
              {children}
            </div>
          </ModalBody> 
        </ModalContent>
      </Modal>
    )
}
