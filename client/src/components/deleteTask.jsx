import { removeTask } from "../api";

async function DeleteTask(props) {
  const { id, setTasks, setFilteredTasks } = props;
  const request = await removeTask(id);

  if (request.success === true) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
    setFilteredTasks((tasks) => tasks.filter((task) => task.id !== id));
  }
}

export default DeleteTask;
