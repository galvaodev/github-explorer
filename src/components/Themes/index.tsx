import React from 'react';
import { ThemeProvider } from 'styled-components';

import { useTheme } from '../../context/ThemeContext';

// import { Container } from './styles';

const Themes: React.FC = ({ children }) => {
  const { theme } = useTheme();

  const themes = {
    dark: {
      background: '#272823',
      title: '#6495ed',
      text: '#fff',
      translate: '0px',
      button: '#553AFC',
    },
    light: {
      background: '#f0f0f5 ',
      title: '#ff6347',
      text: '#000',
      translate: '37px',
      button: '#000',
    },
  };

  return (
    <>
      <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
    </>
  );
};

export default Themes;
