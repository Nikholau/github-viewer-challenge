import { useMemo, useState } from "react";
import { Column } from "react-table";
import { Table } from "../../components/Table";

const Commits: React.FC = () => {
  document.title = 'Commits | JustForYou';
  const [commits, setCommits] = useState([]);

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${paramValue}/repos/{owner}/{repo}/commits`)
  //   .then(response => response.json())
  //   .then(data => setCommits(data))
  // }, [paramValue])

  const columnsCommits = useMemo(
    () => [
      {
        Header: 'Commits',
        accessor: 'name',
      },
    ],
    [],
  );
  
  return (
    <>
    <div>
    <Table
        columns={columnsCommits as Column[]}
        data={commits}
        />
    </div>
    </>
  );
};
export default Commits;