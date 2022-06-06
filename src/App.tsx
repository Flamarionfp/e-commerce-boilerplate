import { Example } from '../src/pages'
import { ThemeProvider } from "styled-components";
import theme from '../src/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Example title="E-commerce Boilerplate" />
      </div>
    </ThemeProvider>

  )
}

export default App
