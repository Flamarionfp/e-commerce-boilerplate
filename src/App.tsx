import { Example } from './pages';
import { ThemeProvider } from "styled-components";
import theme from './theme';
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div>
          <Example title="E-commerce Boilerplate" />
        </div>
      </ThemeProvider>
    </Provider>
  )
}

export default App
