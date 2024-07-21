import { useState } from "react";
import DeleteTask from "./deleteTask";
import UpdateTask from "./updateTask";
import Modal from "./modal";

function Task({ props }) {
  const { task } = props;

  // Setting up useStates for modals

  const [details, setDetails] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <div
      onClick={() => setDetails(!details)}
      className="flex justify-between items-end p-2 border-t rounded-md"
    >
      <div>
        <h4 className="text-xl">{task.title}</h4>
        <p className="text-xs">Description: {task.description}</p>
        <p className="text-xs">Status: {task.status}</p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          {/* // TODO: OnClick */}
          <button
            onClick={() => setEditModal(!editModal)}
            className="border rounded-md px-2 py-1 bg-blue-400"
          >
            Edit
          </button>
          <button
            onClick={() => setDeleteModal(!deleteModal)}
            className="border rounded-md px-2 py-1 bg-red-400"
          >
            Delete
          </button>
        </div>

        <Modal props={{ visible: editModal, setVisibility: setEditModal }}>
          <UpdateTask props={{ task }} />
        </Modal>

        <p className="text-xs">Due: {task.duedate}</p>
      </div>
    </div>
  );
}

export default Task;
