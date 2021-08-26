import { atom } from "recoil";

export const reposState = atom({
  key: "repos",
  default: []
//   {
    // repositories: [],
    // "users/haileykr/repos": [],
//   },
});

export const viewAtom = atom({
  key: "view",
  default: "repositories",
});
