import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';
import Themes from './components/Themes';
import { ThemeCustomProvider } from './context/ThemeContext';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <ThemeCustomProvider>
        <Themes>
          <BrowserRouter>
            <Header />
            <Routes />
          </BrowserRouter>
          <GlobalStyle />
        </Themes>
      </ThemeCustomProvider>
    </>
  );
};

export default App;
