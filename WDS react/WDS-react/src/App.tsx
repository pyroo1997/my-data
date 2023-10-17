import { useState } from "react";
import "./App.css";

function App() {
  const [newTask, setNewTask] = useState("");
  const [todo, setTodo] = useState([]);

  function addtask(e) {
    e.preventDefault();
    setTodo([...todo, newTask]);
    console.log(todo);
    setNewTask("");
  }

  function handleDelete(i) {
    const UpdatedTodo = todo.filter((Element, id) => {
      return i != id;
    });
    setTodo(UpdatedTodo);
  }

  return (
    <div className="text-white w-[50%] p-44">
      <form className="w-[600px] ">
        <label htmlFor="task" className="text-4xl p-5">
          New Task
        </label>
        <input
          type="text"
          placeholder="Add task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          id="task"
          className="w-full h-[40px] bg-slate-600 rounded-md p-5 mt-5"
        />
        <button
          onClick={addtask}
          className="w-[100px] h-[40px] rounded-lg mt-5 text-center bg-blue-500 "
        >
          Add
        </button>
      </form>
      <h1 className="text-4xl mt-10">Your Tasks</h1>
      {todo != [] &&
        todo.map((data, i) => {
          return (
            <>
              <div className="mt-5 w-[600px]" key={i}>
                <input type="checkbox" id="checkbox" className="mr-5" />
                <label htmlFor="checkbox" className="text-lg">
                  {data}
                </label>
                <button
                  className="bg-red-400 text-black rounded-md ml-10 p-2"
                  onClick={() => handleDelete(i)}
                >
                  Delete
                </button>
              </div>
            </>
          );
        })}
      {todo === [] && "No tasks today"}
    </div>
  );
}

export default App;
