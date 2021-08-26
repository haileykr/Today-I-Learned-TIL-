# Youtube - Recoil.js in 10 minutes
### https://www.youtube.com/watch?v=BchtCWxs7sA

* not an official state library for react
* but follows the react hooks pattern

* `npx create-react-app recoil-tutorial`

* `yarn add recoil`

* in index.js,
  * `import { RecoilRoot } from 'recoil';

* in App.js,
  * `import {} from 'recoil';

```javascript
const reposState = atom({
  key: "repos",
  default: [],
})

function App() {
  const [repos, setRepos] = useRecoilState(reposState);
    // ...
}
```

* in `App.js`,  Object.assign sets the state to a new object, including the previous state but overwriting at [key] with the new JSON res

* Recoil Impressions
  * Straightforward UI
  * Separating read-only + read-write APIs
  * Little overhead on top of normal hooks