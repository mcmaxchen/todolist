import { useState } from "react";

function AddTask() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    due: "",
    status: "To do",
  });

  function handleSubmit(e) {
    e.preventDefault();
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
