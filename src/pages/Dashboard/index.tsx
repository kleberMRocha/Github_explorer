import React, { FormEvent, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import Logo from '../../assests/logo.svg';
import { Title, Form, Repositories } from './styles';
import api from '../../services/api';

interface Reposiroty {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Reposiroty[]>([]);
  const [searchValue, SetSearchValue] = useState('');
  const repoHref = `https://github.com/${searchValue}`;

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    const response = await api.get<Reposiroty>(`repos/${searchValue}`);
    setRepositories([...repositories, response.data]);
    SetSearchValue('');
  }

  return (
    <div>
      <img src={Logo} alt="Logo da Aplicação" />
      <Title>Explore repositórios no Github.</Title>
      <Form onSubmit={handleAddRepository}>
        <input
          onChange={(event): void => SetSearchValue(event.target.value)}
          type="text"
          value={searchValue}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        {repositories.map((repository) => (
          <a
            key={repository.full_name}
            target="_blank"
            rel="noreferrer"
            href={repoHref}
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
          </a>
        ))}
      </Repositories>
    </div>
  );
};

export default Dashboard;
