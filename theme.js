import { theme as chakraTheme } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"

const fonts = {
    ...chakraTheme.fonts,
    body: "Inter",
    heading: "Inter",
    fontWeight: 'bold'
}

const customTheme = extendTheme(fonts)

export default customTheme
