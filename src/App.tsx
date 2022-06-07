import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import theme from './theme';
import GlobalStyle from './theme/globalStyle';
import { store } from './redux/store';
import Routes from './routes';

const App = function () {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
