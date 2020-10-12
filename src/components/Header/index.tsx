import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

import logoImg from '../../assets/logo.svg';
import logoImgLight from '../../assets/logo-light.svg';

import { HeaderStyle, Buttons } from './styles';

const Header: React.FC = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <HeaderStyle>
      <Link to="/">
        {theme === 'dark' ? (
          <img src={logoImgLight} alt="Github Explorer" />
        ) : (
          <img src={logoImg} alt="Github Explorer" />
        )}
      </Link>
      <Buttons>
        {location.pathname === '/' ? (
          ''
        ) : (
          <Link to="/">
            <FiChevronLeft size={16} />
            Voltar
          </Link>
        )}
        <div onClick={toggleTheme} className="theme-switch">
          <div className="switch"></div>
        </div>
      </Buttons>
    </HeaderStyle>
  );
};

export default Header;
