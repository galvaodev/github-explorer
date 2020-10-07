import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useRouteMatch, Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import { Header, RepositoryInfo, Inssues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/69631?v=4"
            alt="Facebook"
          />
          <div>
            <strong>facebook/react</strong>
            <p>descrição do repositório</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1808</strong>
            <span>Starts</span>
          </li>

          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>

          <li>
            <strong>67</strong>
            <span>Inssues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Inssues>
        <Link to="kofpd">
          <div>
            <strong>dsa</strong>
            <p>dasd</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Inssues>
    </>
  );
};

export default Repository;
