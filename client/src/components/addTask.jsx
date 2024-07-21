import { useState } from "react";
import { createTask } from "../api";

function AddTask({ props }) {
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
    duedate: "",
    status: "To do",
  });

  const { setTasks } = props;

  async function handleSubmit(e) {
    e.preventDefault();

    const newTask = await createTask(task);
    setTask({ ...task, id: newTask.id });

    addTaskToList();
  }

  function addTaskToList() {
    return setTasks((tasks) => [...tasks, task]);
  }

  return (
    <div className="p-4 border rounded-xl max-w-[496px]">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col gap-4 justify-center align-center"
      >
        <div className="flex flex-col">
          <label>Title</label>
          <input
            type="text"
            className="border px-2 py-1"
            placeholder="Do the dishes..."
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          />
        </div>

        <div className="flex flex-col">
          <label>Due date</label>
          <input
            type="date"
            className="border px-2 py-1"
            onChange={(e) => setTask({ ...task, duedate: e.target.value })}
          />
        </div>

        <div className="flex flex-col">
          <label>Description</label>
          <textarea
            className="border px-2 py-1"
            placeholder="Rince the dishes, Scrub..."
            onChange={(e) => setTask({ ...task, description: e.target.value })}
          ></textarea>
        </div>

        <button className="px-4 py-2 border rounded-xl border-cyan-900 w-fit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddTask;
