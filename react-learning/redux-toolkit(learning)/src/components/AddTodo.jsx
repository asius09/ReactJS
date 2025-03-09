import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/todoSlice";
//dispatch : use reducer to send action in store or change store...
const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    // Add todo logic here
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center w-full p-4 bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-600/50 hover:bg-gray-800/95 mb-6"
    >
      <div className="relative flex-1">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo..."
          className="w-full px-4 py-3 text-gray-100 bg-gray-700/50 rounded-lg border-2 border-gray-600/50 focus:border-blue-500/50 outline-none transition-all duration-200 text-base placeholder:text-gray-500"
        />
        {text && (
          <button
            type="button"
            onClick={() => setText("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors duration-200"
          >
            <i className="ri-close-line text-lg" />
          </button>
        )}
      </div>
      <button
        type="submit"
        disabled={!text.trim()}
        className="flex items-center justify-center w-12 h-12 ml-4 text-white bg-blue-500/80 hover:bg-blue-500 rounded-lg transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500/50"
      >
        <i className="ri-add-line text-lg" />
      </button>
    </form>
  );
};

export default AddTodo;
