import { removeTask } from "../api";

function DeleteTask(props) {
  const { id, setVisibility } = props;

  async function handleDelete() {
    await removeTask(id);
  }

  return (
    <div>
      <p>Do you really wish to delete this task ?</p>

      <div className="flex gap-3">
        <button onClick={() => handleDelete()}>Delete</button>
        <button onClick={() => setVisibility(false)}>Cancel</button>
      </div>
    </div>
  );
}

export default DeleteTask;
