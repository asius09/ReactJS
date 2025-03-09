import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
//to give the unique id... (nanaoid)

const initialStore = {
  todos: [{ id: 1, text: "First todo", completed: false }],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialStore,
  reducers: {
    //reducers always have two parameters / arguments which are state and actions
    //state is the value which store in this case: initialStore...
    //action is the value which store in this case: action.payload
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), //give new id...
        text: action.payload.text, //payload is objext and in it have text....
        completed: false,
      };
      state.todos.push(todo); //here we don't remove to all the
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    },
    toggleTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
