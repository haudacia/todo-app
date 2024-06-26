
import { baseUrl } from "./utils";

const handleDelete = async ({ id, refreshTasks }) => {
  console.log(`Attempting to delete task with ID: ${id}`);  // Log para verificar o ID
  const confirmed = window.confirm("Are you sure you want to delete this task?");
  if (confirmed) {
    try {
      const response = await fetch(`${url}/tasks/${id}`, {
        method: "DELETE"
      });

      console.log('Response status:', response.status);  // Log do status da resposta

      if (response.ok) {
        console.log('Task deleted successfully');  // Log de sucesso
        refreshTasks();
      } else {
        const errorData = await response.json();
        console.log('Error data:', errorData);  // Log do erro
        throw new Error(`Failed to delete task: ${errorData.message}`);
      }
    } catch (error) {
      console.log("Error deleting task:", error.message);
    }
  }
};

export default handleDelete;

// const handleDelete = async ({ id, refreshTasks }) => {
//   console.log(`Attempting to delete task with ID: ${id}`);
//   const confirmed = window.confirm("Are you sure you want to delete this task?");
//   if (confirmed) {
//     try {
//       const response = await fetch(`${url}/tasks/${id}`, {
//         method: "DELETE"
//       });
//       if (response.ok) {
//         refreshTasks();
//       } else {
//         const errorData = await response.json();
//         throw new Error(`Failed to delete task: ${errorData.message}`);
//       }
//     } catch (error) {
//       console.log("Error deleting task", error);
//     }
//   }
// };

// export default handleDelete;

// const handleDelete = ({ id, refreshTasks }) => {
//   console.log(id);
//   const confirmed = window.confirm("Are you sure you want to delete this task?");
//   if (confirmed) {
//     fetch(`${baseUrl}/tasks/${id}`, {
//       method: "DELETE"
//     })
//       .then(() => refreshTasks())
//       .catch((error) => console.log("Error deleting task", error))
//   }
// };

// export default handleDelete;
