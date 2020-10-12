import React, { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { useRouteMatch } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import { RepositoryParams, Issue, RepositoryInt } from '../../types/interfaces';
import api from '../../services/api';
import { RepositoryInfo, Issues } from './styles';

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<RepositoryInt | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    async function loadDate(): Promise<void> {
      const [repository, issues] = await Promise.all([
        api.get(`repos/${params.repository}`),
        api.get(`repos/${params.repository}/issues`),
      ]);

      setRepository(repository.data);
      setIssues(issues.data);
    }

    loadDate();
  }, [params.repository]);

  return (
    <>
      <ReactPaginate
        pageCount={1}
        pageRangeDisplayed={10}
        marginPagesDisplayed={2}
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'break-me'}
        breakClassName={'break-class'}
        breakLinkClassName={'break-link'}
        onPageChange={(selectedItem: { selected: number }) => null}
        initialPage={2}
        forcePage={3}
        disableInitialCallback={false}
        containerClassName={'container'}
        pageClassName={'page-li'}
        pageLinkClassName={'page-a'}
        activeClassName={'active'}
        activeLinkClassName={'active'}
        previousClassName={'previous-li'}
        nextClassName={'next-li'}
        previousLinkClassName={'previous-a'}
        nextLinkClassName={'next-a'}
        disabledClassName={'disabled'}
        hrefBuilder={(pageIndex: number) => null}
        extraAriaContext={'aria'}
      />
      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>

          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Starts</span>
            </li>

            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>

            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map((issue) => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
