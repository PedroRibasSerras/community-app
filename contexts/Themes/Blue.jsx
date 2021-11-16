import { ThemeProvider } from "styled-components"

export const blue = {
	main: "#4e95fd",
    secondary:"#2c68c0"
}

const BlueTheme = ({ children }) => (
	<ThemeProvider theme={blue}>{children}</ThemeProvider>
)

export default BlueTheme
