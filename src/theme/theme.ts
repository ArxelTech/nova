import { extendTheme } from '@chakra-ui/react'

export const colorPallette = {
    brandColor: '#AD87FF',
    gray200: '#E4E7EC',
    gray300: "#D0D5DD",
    inactive: "#667085",
    black: '#0A1018',
    secondarybg: "#10161D",
    btnbg: "#181E25",
    base: "#5A20D4",
    tabcolor: "#6D6D6D0F",
    chat: "#253240",
    online: "#27ECA5" ,
    
}

const colors = {
    brand: {
        primaryColor: colorPallette.brandColor,
        gray200: colorPallette.gray200,
        gray300: colorPallette.gray300,
        inactive: colorPallette.inactive,
        black: colorPallette.black,
        secondarybg: colorPallette.secondarybg,
        base: colorPallette.base,
        btnbg: colorPallette.btnbg,
        tabcolor: colorPallette.tabcolor,
        chat: colorPallette.chat,
        online: colorPallette.online, 
    }
}

const fonts = {
    400: 'Satoshi-Regular',
    700: 'Satoshi-Bold', 
    500: 'Satoshi-Medium',
    300: 'Satoshi-Light', 
    900: 'Satoshi-Black', 
    Regular: 'Satoshi-Black', 
}

export const theme = extendTheme({ colors, fonts})