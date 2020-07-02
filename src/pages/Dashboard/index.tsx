import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="repository">
          <img
            src="https://avatars3.githubusercontent.com/u/18700076?s=460&u=bd28beacf10676f24cf9e87890ce588dd0f8f90e&v=4"
            alt="Mailson"
          />
          <div>
            <strong>mailsonfernando/unform</strong>
            <p>Desafio-06-Banco-de-dados-e-upload-de-arquivos-no-Node.js</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="repository">
          <img
            src="https://avatars3.githubusercontent.com/u/18700076?s=460&u=bd28beacf10676f24cf9e87890ce588dd0f8f90e&v=4"
            alt="Mailson"
          />
          <div>
            <strong>mailsonfernando/unform</strong>
            <p>Desafio-06-Banco-de-dados-e-upload-de-arquivos-no-Node.js</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="repository">
          <img
            src="https://avatars3.githubusercontent.com/u/18700076?s=460&u=bd28beacf10676f24cf9e87890ce588dd0f8f90e&v=4"
            alt="Mailson"
          />
          <div>
            <strong>mailsonfernando/unform</strong>
            <p>Desafio-06-Banco-de-dados-e-upload-de-arquivos-no-Node.js</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
