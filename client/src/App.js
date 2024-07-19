import { useEffect, useState } from "react";
import AddTask from "./components/addTask";

function App() {
  const [message, setMessage] = useState();
  const [tasks, setTasks] = useState();

  useEffect(() => {
    // Fetch des tâches dans la BDD
    fetch("http://localhost:8000/")
      .then(async (result) => {
        // Extrait en format JSON les data de result
        const fetchedTasks = await result.json();

        setTasks(fetchedTasks);
      })
      .catch((err) => setMessage(err.message));
  }, []);

  return (
    <>
      <AddTask />

      {/* Affichage des tâches */}
      {tasks?.map((task) => {
        return <div>{task.title}</div>;
      })}
    </>
  );
}

export default App;
