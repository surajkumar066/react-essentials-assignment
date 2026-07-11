import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import { ACTIONS } from "../reducer/taskReducer";

function TaskInput() {
  const [text, setText] = useState("");
  const { dispatch } = useTaskContext();

  const handleAdd = () => {
    if (text.trim() === "") return;
    dispatch({ type: ACTIONS.ADD_TASK, payload: text });
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}

export default TaskInput;