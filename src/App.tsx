import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import theme from './theme';
import DefaultStyle from './styles/default';
import { store } from './redux/store';
import Routes from './routes';

const App = function () {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <DefaultStyle />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
