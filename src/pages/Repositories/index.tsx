import { useEffect, useMemo, useState } from "react";
import { Column } from "react-table";
import { Table } from "../../components/Table";

const Repositories: React.FC = () => {
  document.title = 'Repositories | JustForYou';

  const [repositories, setRepositories] = useState([]);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const paramValueName = urlParams.get('name');
  useEffect(() => {
    fetch(`https://api.github.com/users/${paramValueName}/repos`)
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [paramValueName])
  
  const columnsRepositories = useMemo(
    () => [
      {
        Header: 'Repositórios',
        accessor: 'name',
      },
      {
        Header: 'Descrição',
        accessor: 'description',
      },
      {
        Header: 'Saiba mais',
        accessor: 'html_url',
      },
    ],
    [],
  );
  return (
    <>
    <div className="container">
        <Table 
        columns={columnsRepositories as Column[]}
        data={repositories}
        />
    </div>
    </>
  );
};
export default Repositories;