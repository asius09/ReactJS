import "remixicon/fonts/remixicon.css";
import { AddTodo, Todo } from "./components";

const App = () => {
  return (
    <div className="bg-black min-h-screen py-8 px-4 sm:px-6 md:py-12 lg:py-16">
      <div className="max-w-3xl mx-auto w-full">
        <AddTodo />
        <div className="mt-6">
          <Todo />
        </div>
      </div>
    </div>
  );
};

export default App;
