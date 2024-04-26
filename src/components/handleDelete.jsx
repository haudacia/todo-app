import { useEffect } from "react";

const url = "http://localhost:3000/tasks";

const handleDelete = ({ id, refreshTasks }) => {
  const confirmed = window.confirm("Are you sure you want to delete this task?");
  useEffect(() => {
    if (confirmed) {
      if (refresh) {
        fetch(`${url}/${id}`)
          .then((res) => res.json())
          .then((data) => refreshTasks(data))
          .catch((error) => console.log("Error deleting task", error))
      }
    }
  }, [refresh]);
};

export default handleDelete;