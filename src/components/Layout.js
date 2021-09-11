import { Box, Flex, useColorMode } from '@chakra-ui/react'
import Footer from './Footer'
import { DarkModeToggle } from './DarkModeToggle'

export default function Layout ({ children }) {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'gray.900' }
  const color = { light: 'gray.600', dark: 'gray.300' }

  return (
    <Flex
      direction='column'
      alignItems='center'
      justifyContent='center'
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      height='100vh'
    >
      <Box as='main' height='100%'>
        {children}
      </Box>
      <DarkModeToggle />
      <Footer />
    </Flex>
  )
}
