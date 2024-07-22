import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getTaskById, updateTask } from "../api";

function Update() {
  const { id } = useParams();
  const [updatedTask, setUpdatedTask] = useState();

  const [message, setMessage] = useState();

  useEffect(() => {
    async function fetchTask() {
      setUpdatedTask(await getTaskById(id));
    }

    fetchTask();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage();

    const request = await updateTask(id, updatedTask);

    if (request.message) {
      setMessage(request.message);
    }
  }

  if (updatedTask) {
    return (
      <div className="flex h-screen align-center justify-center">
        <Link to="/" className="mt-6">
          Go back
        </Link>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-4 justify-center align-center w-[60vw] md:w-[35vw]"
        >
          <div className="flex flex-col">
            <h1 className="text-xl">{updatedTask.title}</h1>

            <label>Title</label>
            <input
              type="text"
              className="border px-2 py-1"
              placeholder="Do the dishes..."
              defaultValue={updatedTask.title}
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, title: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col">
            <label>Due date</label>
            <input
              type="date"
              defaultValue={updatedTask.duedate}
              className="border px-2 py-1"
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
              defaultValue={updatedTask.description}
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, description: e.target.value })
              }
            ></textarea>
          </div>

          <div className="flex flex-col">
            <label>Status</label>
            <select
              defaultValue={updatedTask.status}
              className="border px-2 py-1"
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, status: e.target.value })
              }
            >
              <option value="To do">To do</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
          </div>

          {message}

          <button className="px-4 py-2 border rounded-xl border-cyan-900 w-fit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Update;
