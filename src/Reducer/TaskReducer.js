export const ACTIONS = {
  ADD_TASK: "ADD_TASK",
  TOGGLE_TASK: "TOGGLE_TASK",
  EDIT_TASK: "EDIT_TASK",
  DELETE_TASK: "DELETE_TASK",
  CLEAR_TASKS: "CLEAR_TASKS",
};

export const initialState = {
  tasks: [],
};

export function taskReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TASK: {
      const newTask = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      return { ...state, tasks: [...state.tasks, newTask] };
    }

    case ACTIONS.TOGGLE_TASK: {
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    }

    case ACTIONS.EDIT_TASK: {
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, text: action.payload.newText }
            : task
        ),
      };
    }

    case ACTIONS.DELETE_TASK: {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    }

    case ACTIONS.CLEAR_TASKS: {
      return { ...state, tasks: [] };
    }

    default:
      return state;
  }
}