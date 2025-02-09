import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Column } from "react-table";
import { Table } from "../../components/Table";
import { Loader } from "../../components/Loader";

const Repositories: React.FC = () => {
  document.title = 'Repositories | GitHub Viewer';

  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const getQueryParams = () => {
    const hash = window.location.hash;
    const queryString = hash.includes("?") ? hash.split("?")[1] : "";
    return new URLSearchParams(queryString);
  };
  
  const urlParams = getQueryParams();
  const paramValueName = urlParams.get("name") || "";
  


  useEffect(() => {
    fetch(`https://api.github.com/users/${paramValueName}/repos`)
      .then(response => response.json())
      .then(data => {
        setRepositories(data);
        setLoading(false);
      });
  }, [paramValueName]);
  
  
  const handleClickNameRepositories = (name: string ) => {
    navigate('/branches?repositories=' + name + "&user_name=" + urlParams.get("name"));
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

  if (loading) return <Loader />;

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