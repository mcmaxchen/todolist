import { useEffect, useState } from "react";

import AddTask from "../components/addTask";
import Filter from "../components/filter";
import Task from "../components/task";

import { getTasks } from "../api";

function Home() {
  const [message, setMessage] = useState();
  const [tasks, setTasks] = useState();
  const [filteredTasks, setFilteredTasks] = useState();

  useEffect(() => {
    // Fetching tasks from the DB

    async function fetchTasks() {
      setTasks(await getTasks());
      setFilteredTasks(await getTasks());
    }

    fetchTasks();
  }, []);

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* TODO: Modal */}
      <AddTask props={{ setTasks }} />

      <>
        <Filter props={{ tasks, setFilteredTasks }} />
      </>

      {filteredTasks?.map((task) => {
        // TODO: Modals
        return <Task key={task.id} props={{ task }} />;
      })}
    </div>
  );
}

export default Home;
