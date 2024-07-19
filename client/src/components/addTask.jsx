import { useState } from "react";
import { createTask } from "../api";

function AddTask({ props }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    due: "",
    status: "To do",
  });

  const { setTasks } = props;

  function handleSubmit(e) {
    e.preventDefault();

    // createTask(task);
    setTasks((tasks) => [{ ...tasks, task }]);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>Add a task</label>

      <label>Title</label>
      <input type="text" placeholder="Task..." />

      <label>Description</label>
      <textarea></textarea>

      <label>Due date</label>
      <input type="date" />

      <button>Submit</button>
    </form>
  );
}

export default AddTask;
