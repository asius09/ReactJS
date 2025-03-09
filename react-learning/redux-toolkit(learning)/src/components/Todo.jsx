import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo, toggleTodo } from "../features/Todo/todoSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo({ id }));
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo({ id }));
  };

  const handleUpdateTodo = (id, text) => {
    dispatch(updateTodo({ id, text }));
  };

  return (
    <div className="space-y-4">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <div
            key={todo.id}
            className="group flex items-center justify-between w-full p-4 bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-600/50 hover:bg-gray-800/95"
          >
            <div className="flex items-center flex-1 mr-4">
              <input
                type="checkbox"
                checked={todo.completed}
                className="w-5 h-5 rounded-md border-2 border-gray-600 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-800 transition-all duration-200 cursor-pointer"
                onChange={() => handleToggleTodo(todo.id)}
              />
              <span
                className={`ml-4 text-gray-100 text-lg font-medium transition-all duration-200 ${
                  todo.completed
                    ? "line-through text-gray-500"
                    : "hover:text-white"
                }`}
              >
                {todo.text}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="p-2 text-gray-400 hover:text-white bg-gray-700/50 hover:bg-blue-500/80 rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                title="Edit todo"
                onClick={() =>
                  handleUpdateTodo(
                    todo.id,
                    prompt("Edit todo:", todo.text)
                  )
                }
              >
                <i className="ri-pencil-fill" />
              </button>
              <button
                className="p-2 text-gray-400 hover:text-white bg-gray-700/50 hover:bg-red-500/80 rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500/50"
                title="Delete todo"
                onClick={() => handleRemoveTodo(todo.id)}
              >
                <i className="ri-delete-bin-fill" />
              </button>
              {todo.completed && (
                <span className="ml-2 text-green-500 animate-fade-in">
                  <i className="ri-checkbox-circle-fill text-lg" />
                </span>
              )}
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 text-lg">
          You have no todos yet.
        </p>
      )}
    </div>
  );
};

export default Todo;
