import {  useMemo, useState } from "react";
import { Column } from "react-table";
import { Table } from "../../components/Table";

const Branches: React.FC = () => {
  document.title = 'Branches | JustForYou';

  const [branches, setBranches] = useState([]);

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${paramValue}/repos/{owner}/{repo}/commits`)
  //   .then(response => response.json())
  //   .then(data => setBranches(data))
  // }, [paramValue])

  const columnsBranches = useMemo(
    () => [
      {
        Header: 'Branches',
        accessor: 'name',
      },
    ],
    [],
  );
  
  return (
    <>
    <div>
    <Table
        columns={columnsBranches as Column[]}
        data={branches}
        />
    </div>
    </>
  );
};
export default Branches;