import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Header, RepositoryInfo } from './styles';

interface RepositoryParam {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParam>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} /> Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/18700076?s=460&u=bd28beacf10676f24cf9e87890ce588dd0f8f90e&v=4"
            alt="Mailson"
          />
        </header>
        <ul />
      </RepositoryInfo>
    </>
  );
};

export default Repository;
