import { TaskProvider } from "./context/TaskContext";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskSummary from "./components/TaskSummary";
import "./App.css";

function App() {
  return (
    <TaskProvider>
      <div className="app">
        <h1>Task Manager</h1>
        <TaskInput />
        <TaskSummary />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;