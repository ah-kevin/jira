import React from "react";
import { List } from "../../../component/list";
import { SearchPanel } from "../../../component/search-panel";
import { useEffect, useState } from "react";
import qs from "qs";
import { cleanObject, useDebounce, useMount } from "../../../utils";
import { apiUrl } from "../../../utils/constant";
import { useHttp } from "../../../utils/http";

export const ProjectList = () => {
  const [users, setUsers] = useState([]);

  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const debouncedParam = useDebounce(param, 500);
  const [list, setList] = useState([]);
  const client = useHttp();
  useEffect(() => {
    client("projects", cleanObject(debouncedParam)).then(setList);
  }, [debouncedParam]);
  useMount(() => {
    client("users").then(setUsers);
  });
  return (
    <div>
      <List list={list} users={users} />
      <SearchPanel users={users} param={param} setParam={setParam} />
    </div>
  );
};
