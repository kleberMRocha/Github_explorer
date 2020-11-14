import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, UserInfo, RepoInfos, Repositories } from './styled';
import logo from '../../assests/logo.svg';
import api from '../../services/api';

interface RepositoryParms {
  repository: string;
}

interface Reposiroty {
  html_url: string;
  full_name: string;
  description: string;
  forks: number;
  open_issues: number;
  stargazers_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issuerepository {
  id: number;
  title: string;
  html_url: string;
  created_at: Date;
  author_association: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParms>();
  const [issues, setIssues] = useState<Issuerepository[]>([]);
  const [repository, setRepository] = useState<Reposiroty | null>(null);
  useEffect(() => {
    api
      .get(`repos/${params.repository}`)
      .then((response) => setRepository(response.data));
    api
      .get(`repos/${params.repository}/issues`)
      .then((response) => setIssues(response.data));
  }, [params.repository]);

  return (
    repository && (
      <>
        <Header>
          <img src={logo} alt="logo Repo explorer" />
          <Link id="goBack" to="/">
            <FiChevronLeft size={30} />
            Voltar
          </Link>
        </Header>
        <UserInfo>
          <div>
            <img src={repository.owner.avatar_url} alt="avatar" />
          </div>
          <div className="title">
            <h2>{repository.full_name}</h2>
            <p>{repository.description}</p>
          </div>
        </UserInfo>
        <RepoInfos>
          <div>
            <h2>{repository.stargazers_count}</h2>
            <p>Stars</p>
          </div>
          <div>
            <h2>{repository.forks}</h2>
            <p>Forks</p>
          </div>
          <div>
            <h2>{repository.open_issues}</h2>
            <p>Issues abertas</p>
          </div>
        </RepoInfos>
        <Repositories>
          {issues.map((issue) => (
            <a
              href={issue.html_url}
              target="_blank"
              rel="noreferrer"
              key={issue.id}
            >
              <h2>{issue.title}</h2>
              <FiChevronRight size={30} />
            </a>
          ))}
        </Repositories>
      </>
    )
  );
};

export default Repository;
