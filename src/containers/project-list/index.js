import React from "react";
import { List } from "../../component/list";
import { SearchPanel } from "../../component/search-panel";
import { useEffect, useState } from "react";
import qs from "qs";
import { cleanObject } from "../../utils";

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectList = () => {
  const [users, setUsers] = useState([]);

  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(
      async (response) => {
        if (response.ok) {
          setList(await response.json());
        }
      }
    );
  }, [param]);
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  }, []);
  return (
    <div>
      <List list={list} users={users} />
      <SearchPanel users={users} param={param} setParam={setParam} />
    </div>
  );
};
