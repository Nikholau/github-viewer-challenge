import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Column } from "react-table";
import { Table } from "../../components/Table";

const Branches: React.FC = () => {
  document.title = 'Branches | GitHub Viewer';

  const [branches, setBranches] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const userName = queryParams.get("user_name");
  const repositoryName = queryParams.get("repositories");

  useEffect(() => {
    if (userName && repositoryName) {
      fetch(`https://api.github.com/repos/${userName}/${repositoryName}/branches`)
        .then(response => response.json())
        .then(data => setBranches(data))
        .catch(error => console.error("Error fetching branches:", error));
    }
  }, [userName, repositoryName]); 

  const handleClickNameBranches = useCallback(() => {
    if (userName && repositoryName) {
      navigate(`/commits?repositories=${repositoryName}&user_name=${userName}`);
    }
  }, [navigate, userName, repositoryName]);

  const columnsBranches = useMemo(
    () => [
      {
        Header: 'Branches',
        accessor: 'name',
        Cell: ({ value }: any) => (
          <div onClick={handleClickNameBranches} style={{ cursor: 'pointer' }}>
            {value}
          </div>
        ),
      },
    ],
    [handleClickNameBranches],
  );

  return (
    <div>
      <Table columns={columnsBranches as Column[]} data={branches} />
    </div>
  );
};

export default Branches;