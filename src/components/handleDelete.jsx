
import { url } from "./utils";

const handleDelete = ({ id, refreshTasks }) => {
  console.log(id);
  const confirmed = window.confirm("Are you sure you want to delete this task?");
  if (confirmed) {
    fetch(`${url}/tasks/${id}`, {
      method: "DELETE"
    })
      .then(() => refreshTasks())
      .catch((error) => console.log("Error deleting task", error))
  }
};

export default handleDelete;
