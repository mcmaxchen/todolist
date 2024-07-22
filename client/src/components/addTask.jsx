import { useState } from "react";
import { createTask } from "../api";

function AddTask({ props }) {
  const [message, setMessage] = useState();
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
    duedate: "",
    status: "To do",
  });

  const { setTasks, setFilteredTasks, setVisibility } = props;

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage();

    if (task.title === "" || task.description === "" || task.duedate === "") {
      return setMessage("Please fill the form");
    }

    const request = await createTask(task);

    if (request.success === false) {
      return setMessage(request.message);
    }

    setMessage(request.message);
    setFilteredTasks((tasks) => [...tasks, { ...task, id: request.id }]);
    setTasks((tasks) => [...tasks, { ...task, id: request.id }]);
  }

  return (
    <div className="p-4 border rounded-xl max-w-[300px] bg-gray-500">
      <button className="mb-2" onClick={() => setVisibility(false)}>
        x
      </button>

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

        {message}

        <button className="px-4 py-2 border rounded-xl border-cyan-900 w-fit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddTask;
