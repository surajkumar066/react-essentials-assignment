import { useTaskContext } from "../context/TaskContext";
import { ACTIONS } from "../reducer/taskReducer";

function TaskSummary() {
  const { state, dispatch } = useTaskContext();

  const total = state.tasks.length;
  const completed = state.tasks.filter((task) => task.completed).length;

  const handleClearAll = () => {
    dispatch({ type: ACTIONS.CLEAR_TASKS });
  };

  return (
    <div className="task-summary">
      <p>
        Total: {total} | Completed: {completed}
      </p>
      {total > 0 && (
        <button onClick={handleClearAll} className="clear-btn">
          Clear All
        </button>
      )}
    </div>
  );
}

export default TaskSummary;