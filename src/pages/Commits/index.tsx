import { useEffect, useMemo, useState } from "react";
import { Column } from "react-table";
import { Table } from "../../components/Table";

const Commits: React.FC = () => {
  document.title = 'Commits | JustForYou';
  const [commits, setCommits] = useState([]);
  const queryString = window.location.search;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const urlParams = new URLSearchParams(queryString);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${urlParams.get("user_name")}/${urlParams.get("repositories")}/commits`)
    .then(response => response.json())
    .then(data => setCommits(data))
  }, [urlParams])

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