const url = "http://localhost:3000/tasks";

const formatDateForUser = (dateString) => {
  const options = {
    hour: 'numeric',
    minute: '2-digit',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  if (dateString) {
    //transforms string representing date input by user to Date object
    return new Date(dateString).toLocaleString('es-ES', options);
  }
};

const dateStrToObj = (dateString) => {
  if (dateString) {
    return new Date(dateString)
  }
}

const showBrowserTimeZone = () => {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log(tz);
}

const isToday = (someDate) => {
  const today = new Date()
  return someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
};

export {
  url,
  formatDateForUser,
  dateStrToObj,
  showBrowserTimeZone,
  isToday
}

/*   ADD TO DEDICATED FILE LATER (all fetch operations)
import axios from "axios";

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
*/

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
