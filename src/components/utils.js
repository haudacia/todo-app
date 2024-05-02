const url = "http://localhost:3000/tasks";

const formatDateForUser = (dateString) => {
  let displayedDate = undefined;
  const adjustTimezone = () => {
    const options = {
      hour: 'numeric',
      minute: '2-digit',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    // if dateString is null (user didn't choose a date), adjustment is not performed
    if (dateString) {
      //transforms string representing date input by user to Date object
      const objDateAdjustedTimeZone = new Date(dateString).toLocaleString('es-ES', options);
      return objDateAdjustedTimeZone
    }
  }
  const isToday = () => {
    const today = new Date()
    const someDate = new Date(dateString)
    return (
      someDate.getDate() == today.getDate() &&
      someDate.getMonth() == today.getMonth() &&
      someDate.getFullYear() == today.getFullYear()
    )
  };

  const isTomorrow = () => {
    const today = new Date()
    const someDate = new Date(dateString)
    return (
      someDate.getDate() == today.getDate() + 1 &&
      someDate.getMonth() == today.getMonth() &&
      someDate.getFullYear() == today.getFullYear()
    )
  };

  if (isToday()) {
    displayedDate = 'today'
  } else if (isTomorrow()) {
    displayedDate = 'tomorrow'
  } else {
    displayedDate = `${adjustTimezone()}h`
  }
  return displayedDate
};

//on browser, dates are type string for 
// datetime-local input fields,
// but fetches require date to be a Date object 
const dateStrToObj = (dateString) => {
  if (dateString) {
    return new Date(dateString)
  }
}

const showBrowserTimeZone = () => {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log(tz);
}

const isToday = (someDateStr) => {
  const today = new Date()
  const someDate = new Date(someDateStr)
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
