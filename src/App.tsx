import { ThemeProvider } from "styled-components";
import theme from './theme';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Routes from './routes'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  )
}

export default App
