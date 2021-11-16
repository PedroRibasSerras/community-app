import { ThemeProvider } from "styled-components"

export const pink = {
	main: "#c64efd",
    secondary:"#912cc0"
}

const PinkTheme = ({ children }) => (
	<ThemeProvider theme={pink}>{children}</ThemeProvider>
)

export default PinkTheme
