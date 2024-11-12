import { useEffect } from "react";
import "./App.css";
import { todoFamily } from "./atom";
import { useRecoilValue, RecoilRoot, useSetRecoilState } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div>
        <UpdateTodo id={2} />
        <Todo id={1} />
        <Todo id={2} />
      </div>
    </RecoilRoot>
  );
}

function UpdateTodo({ id }) {
  let todoUpdater = useSetRecoilState(todoFamily(id));

  useEffect(() => {
    todoUpdater({
      id: 2,
      task: "Hello World 2",
    });
  })

  return <div></div>;
}

function Todo({ id }) {
  let todofamily = useRecoilValue(todoFamily(id));
  return (
    <div>
      <h4>{todofamily.task}</h4>
    </div>
  );
}

export default App;
