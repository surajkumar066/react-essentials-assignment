import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import { ACTIONS } from "../reducer/taskReducer";

function TaskItem({ task }) {
  const { dispatch } = useTaskContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleToggle = () => {
    dispatch({ type: ACTIONS.TOGGLE_TASK, payload: task.id });
  };

  const handleDelete = () => {
    dispatch({ type: ACTIONS.DELETE_TASK, payload: task.id });
  };

  const handleEditSave = () => {
    if (editText.trim() === "") return;
    dispatch({
      type: ACTIONS.EDIT_TASK,
      payload: { id: task.id, newText: editText },
    });
    setIsEditing(false);
  };

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />

      {isEditing ? (
        <input
          type="text"
          className="edit-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleEditSave()}
        />
      ) : (
        <span className="task-text">{task.text}</span>
      )}

      <div className="task-buttons">
        {isEditing ? (
          <button onClick={handleEditSave}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button onClick={handleDelete} className="delete-btn">
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;