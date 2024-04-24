const getTasks = async () => {
  const url2 = "http://localhost:3000/todos";

  return fetch(url2)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
//   try {
//     const response = await fetch(url2);
//     if (!response.ok) throw new Error(response.status);
//     return await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

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

export default { getTasks, deleteTask };
