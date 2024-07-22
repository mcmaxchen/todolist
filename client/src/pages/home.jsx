import { useEffect, useState } from "react";

import AddTask from "../components/addTask";
import Filter from "../components/filter";
import Modal from "../components/modal";
import Task from "../components/task";

import { getTasks } from "../api";

function Home() {
  const [tasks, setTasks] = useState();
  const [filteredTasks, setFilteredTasks] = useState();

  // If true, show AddTask form
  const [visible, setVisibility] = useState(false);

  useEffect(() => {
    // Fetching tasks from the DB

    async function fetchTasks() {
      const request = await getTasks();

      if (request.success === false) {
        return;
      }

      setTasks(request.tasks);
      setFilteredTasks(request.tasks);
    }

    fetchTasks();
  }, []);

  return (
    <div className="flex flex-col gap-4 p-4">
      <Modal props={{ visible, setVisibility }}>
        <AddTask props={{ setTasks, setFilteredTasks, setVisibility }} />
      </Modal>

      <>
        <Filter props={{ tasks, setFilteredTasks }} />
      </>

      {filteredTasks?.map((task) => {
        return (
          <Task key={task.id} props={{ task, setTasks, setFilteredTasks }} />
        );
      })}

      <button
        onClick={() => setVisibility(!visible)}
        className="flex justify-center align-center border-t border-b p-4"
      >
        <p>+ Add a new task</p>
      </button>
    </div>
  );
}

export default Home;
