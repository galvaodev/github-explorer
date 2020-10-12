import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { HeaderStyle } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderStyle>
      <Link to="/">
        <img src={logoImg} alt="Github Explorer" />
      </Link>
      <Link to="/">
        <FiChevronLeft size={16} />
        Voltar
      </Link>
    </HeaderStyle>
  );
};

export default Header;
