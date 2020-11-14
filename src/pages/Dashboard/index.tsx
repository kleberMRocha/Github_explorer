import React, { FormEvent, useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Logo from '../../assests/logo.svg';
import { Title, Form, Repositories, Error } from './styles';
import api from '../../services/api';

interface Reposiroty {
  html_url: string;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}
const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Reposiroty[]>(() => {
    const localStorangeRepositorys = localStorage.getItem(
      '@ReposExplorer:repositories',
    );
    if (localStorangeRepositorys) {
      return JSON.parse(localStorangeRepositorys);
    }
    return [];
  });

  const [searchValue, SetSearchValue] = useState('');
  const [inputErrors, seInputErrors] = useState('');

  useEffect(() => {
    localStorage.setItem(
      '@ReposExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (!searchValue) {
      seInputErrors('Por favor, informe um valor válido.');
      return;
    }
    try {
      const response = await api.get<Reposiroty>(`repos/${searchValue}`);
      setRepositories([...repositories, response.data]);
      SetSearchValue('');
      seInputErrors('');
    } catch (error) {
      seInputErrors(` Reposirótio não encontrado ( ${error.message} ).`);
    }
  }

  return (
    <div>
      <img src={Logo} alt="Logo da Aplicação" />
      <Title>Explore repositórios no Github.</Title>
      <Form hasError={!!inputErrors} onSubmit={handleAddRepository}>
        <input
          onChange={(event): void => SetSearchValue(event.target.value)}
          type="text"
          value={searchValue}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputErrors && <Error>{inputErrors}</Error>}
      <Repositories>
        {repositories.map((repository) => (
          <Link
            key={repository.full_name}
            to={`/repositories/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={30} />
          </Link>
        ))}
      </Repositories>
    </div>
  );
};

export default Dashboard;
