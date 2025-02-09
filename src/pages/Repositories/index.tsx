import { useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { Column } from "react-table";
import { Table } from "../../components/Table";

const Repositories: React.FC = () => {
  document.title = 'Repositories | JustForYou';

  const [repositories, setRepositories] = useState([]);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const history = useHistory();
  const paramValueName = urlParams.get('name');
  useEffect(() => {
    fetch(`https://api.github.com/users/${paramValueName}/repos`)
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [paramValueName])
  
  const handleClickNameRepositories = (name: string ) => {
    history.push('/branches?repositories=' + name + "&user_name=" + urlParams.get("name"));
  } 

  const columnsRepositories = useMemo(
    () => [
      {
        Header: 'Repositórios',
        accessor: 'name',
        Cell: ({value}:any) => <div onClick={() => handleClickNameRepositories(value)}>{value}</div>
      },
      {
        Header: 'Descrição',
        accessor: 'description',
        Cell: ({value}:any) => <div onClick={() => handleClickNameRepositories(value)}>{value}</div>
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
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