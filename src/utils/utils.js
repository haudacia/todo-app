import axios from "axios";

const url = "http://localhost:3000/tasks";

const getTasks = async () => {
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

const deleteTask = async (taskId) => {

  console.log('axios here')
  return axios
    .delete(`${url}/${taskId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

const refreshPage = () => {
  window.location.reload();
};

export default { getTasks, deleteTask, refreshPage };

/* previous unsuccessful attempt, without using axios
const deleteTask = (taskId) => {
  const url = "http://localhost:3000/todo";

  return fetch(`${url}/${taskId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log("Task deleted successfully");
        return response.json();
      } else {
        throw new Error("Failed to delete task");
      }
    })
    .catch((error) => {
      console.error("Error deleting task:", error);
      throw error;
    });
};
*/
