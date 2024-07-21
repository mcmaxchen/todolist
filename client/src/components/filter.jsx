function Filter({ props }) {
  const { tasks, setFilteredTasks } = props;

  function filterTasks(status) {
    if (status === "All") {
      return setFilteredTasks(tasks);
    }

    setFilteredTasks(tasks.filter((task) => task.status === status));
  }

  return (
    <div className="flex gap-2">
      <label>Filter</label>
      <select className="border" onChange={(e) => filterTasks(e.target.value)}>
        <option>All</option>
        <option>To do</option>
        <option>Doing</option>
        <option>Done</option>
      </select>
    </div>
  );
}

export default Filter;
