import { Example } from '@/pages';
import { ThemeProvider } from "styled-components";
import theme from '@/theme';

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
