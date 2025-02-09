import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Column } from "react-table";
import { Table } from "../../components/Table";

const Commits: React.FC = () => {
  document.title = 'Commits | GitHub Viewer';

  const [commits, setCommits] = useState([]);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const userName = queryParams.get("user_name");
  const repositoryName = queryParams.get("repositories");

  useEffect(() => {
    if (userName && repositoryName) {
      fetch(`https://api.github.com/repos/${userName}/${repositoryName}/commits`)
        .then(response => response.json())
        .then(data => setCommits(data))
        .catch(error => console.error("Error fetching commits:", error));
    }
  }, [userName, repositoryName]); 

  const columnsCommits = useMemo(
    () => [
      {
        Header: 'Commits',
        accessor: 'commit.message', 
      },
    ],
    [],
  );

  return (
    <div>
      <Table columns={columnsCommits as Column[]} data={commits} />
    </div>
  );
};

export default Commits;