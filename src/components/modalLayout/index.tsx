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
  title?: any,
  hide?: boolean,
  height?: boolean,
  headercolor?: string,
  headerIcon?: any,
  connect?: boolean,
  children: React.ReactNode
}

export default function ModalLayout(props: Props) {

  let {
    open,
    close,
    size,
    title,
    hide,
    headercolor,
    headerIcon,
    children,
    height,
    connect,
  } = props;

  return (
    <Modal size={size ? size : "md"} isCentered scrollBehavior="inside" isOpen={open} onClose={close}>
      <ModalOverlay 
        backdropFilter='blur(10px) hue-rotate(90deg)' />
      <ModalContent px={"0px"} bgColor={headercolor ? headercolor : "#0A1018"}>
        {!hide && (
          <>
            <ModalHeader display={"flex"} alignItems={"center"} gap={"2"} textAlign={"left"} >
              {headerIcon}
              <p className=" font-semibold  text-[#FFF] text-[22px] lg:text-base " >{title}</p>
            </ModalHeader>
            <ModalCloseButton backgroundColor={connect ? "" : "#fff"} borderRadius={connect ? "" : "1000px"} color={connect ? "#fff" : "#344054"} />
          </>
        )}
        <ModalBody bgColor="#0A1018" padding="0px" rounded={"16px"} borderBottomRadius="8px" >
          <div className={size === "full" ? "  h-[100vh]" : !height ? " overflow-y-auto lg:max-h-[80vh] max-h-auto relative  " : " overflow-y-auto  relative  "} >
            {children}
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
