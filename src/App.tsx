import { useState } from "react";
import { useAppDispatch } from "./hook";

//reducers
import { addTodo } from "./store/todoSlice";

//components
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";

import "./App.css";

const App: React.FC = () => {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div className="App">
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <TodoList />
    </div>
  );
};

export default App;
