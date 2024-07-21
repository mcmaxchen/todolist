import { useState } from "react";

function UpdateTask({ props }) {
  const { id, title, description, duedate, status } = props;
  const [updatedTask, setUpdatedTask] = useState({
    title,
    description,
    duedate,
    status,
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
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
          onChange={(e) =>
            setUpdatedTask({ ...updatedTask, title: e.target.value })
          }
        />
      </div>

      <div className="flex flex-col">
        <label>Due date</label>
        <input
          type="date"
          className="border px-2 py-1"
          onChange={(e) =>
            setUpdatedTask({ ...updatedTask, duedate: e.target.value })
          }
        />
      </div>

      <div className="flex flex-col">
        <label>Description</label>
        <input
          type="date"
          onChange={(e) =>
            setUpdatedTask({ ...updatedTask, duedate: e.target.value })
          }
        />
      </div>

      <div className="flex flex-col">
        <label>Description</label>
        <textarea
          className="border px-2 py-1"
          placeholder="Rince the dishes, Scrub..."
          onChange={(e) =>
            setUpdatedTask({ ...updatedTask, description: e.target.value })
          }
        ></textarea>
      </div>

      <button className="px-4 py-2 border rounded-xl border-cyan-900 w-fit">
        Submit
      </button>
    </form>
  );
}

export default UpdateTask;
