import { React } from "react";
import { useRecoilState } from "recoil";
import { viewAtom } from "./atoms.js";

const Menu = () => {
  const viewOptions = ["repositories", "users/haileykr/repos"];
  const [view, setView] = useRecoilState(viewAtom);
  return (
      <>
      <h3>Menu</h3>
    <nav className="menu">
      {viewOptions.map((v) => (
        <a
          className={view === v ?"text-bold":""}
          href="/#"
          onClick={() => setView(v)}
          key={v}
        >
          Search {v}
        </a>
      ))}
    </nav>
  
  </>
  );
};

export default Menu;
