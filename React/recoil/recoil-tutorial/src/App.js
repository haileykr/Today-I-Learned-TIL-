import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { reposState as reposAtom, viewAtom } from "./atoms.js";
import "./App.css";

import Menu from "./menu.js";

function App() {
  const [repos, setRepos] = useRecoilState(reposAtom);

  const view = useRecoilValue(viewAtom);
  useEffect(() => {
    const getRepos = async () => {
      const url = `https://api.github.com/${view}`;
      const response = await fetch(url);
      const body = await response.json();

      setRepos(body)
      // setRepos(
      //   Object.assign({}, repos, {
      //     [view]: body,
      //   })
      // );
    };
    getRepos();
  }, [view]);
  return (
    <>
      <Menu />
      <h2>{view}</h2>

      {repos.map((repo) => (
      // {repos[view].map((repo) => (
        <div className="each" key={repo.url}>
          <a href={repo.url}>{repo.full_name}</a>
          <div>{repo.description}</div>

          <div>id: {repo.id}</div>
        </div>
      ))}
    </>
  );
}
export default App;
