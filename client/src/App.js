import { useEffect, useState } from "react";
import AddTask from "./components/addTask";
import { getTasks } from "./api";

function App() {
  const [message, setMessage] = useState();
  const [tasks, setTasks] = useState();

  useEffect(() => {
    // Fetching tasks from the DB
    async function fetchTasks() {
      setTasks(await getTasks());
    }

    fetchTasks();
  }, []);

  return (
    <>
      <AddTask props={{ setTasks }} />

      {tasks ? console.log(tasks) : ""}

      {/* {tasks?.map((task) => {
        return <div key={task.id}>{task.title}</div>;
      })} */}
    </>
  );
}

export default App;
