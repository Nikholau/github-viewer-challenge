import {  useCallback, useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { Column } from "react-table";
import { Table } from "../../components/Table";

const Branches: React.FC = () => {
  document.title = 'Branches | JustForYou';

  const [branches, setBranches] = useState([]);
  const queryString = window.location.search;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const urlParams = new URLSearchParams(queryString);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${urlParams.get("user_name")}/${urlParams.get("repositories")}/branches`)
    .then(response => response.json())
    .then(data => setBranches(data))
  }, [urlParams])

  const history = useHistory();

  const handleClickNameBranches = useCallback(() => {
    history.push('/commits?repositories=' + urlParams.get("repositories") + "&user_name=" + urlParams.get("user_name"));
  }, [history, urlParams]); 


  const columnsBranches = useMemo(
    () => [
      {
        Header: 'Branches',
        accessor: 'name',
        Cell: ({value}:any) => <div onClick={() => handleClickNameBranches()}>{value}</div>
      },
    ],
    [handleClickNameBranches],
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