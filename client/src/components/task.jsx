import { Link } from "react-router-dom";

function Task({ props }) {
  const { task } = props;

  return (
    <div className="flex justify-between items-end p-2 border-t rounded-md">
      <div>
        <h4 className="text-xl">{task.title}</h4>
        <p className="text-xs">Description: {task.description}</p>
        <p className="text-xs">Status: {task.status}</p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          {/* // TODO: OnClick */}
          <Link
            to={"tasks/" + task.id}
            className="border rounded-md px-2 py-1 bg-blue-400"
          >
            Edit
          </Link>
          <Link to="" className="border rounded-md px-2 py-1 bg-red-400">
            Delete
          </Link>
        </div>

        <p className="text-xs">Due: {task.duedate}</p>
      </div>
    </div>
  );
}

export default Task;
