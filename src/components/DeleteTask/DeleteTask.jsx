import { useEffect } from "react";

const DeleteTask = ({ taskId }) => {
  const url = "http://localhost:3000/tasks";
  useEffect(() => {
    const deleteTask = async () => {
      try {
        await fetch(`${url}/${taskId}`, {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json',
          },
        });
        // if (!response.ok) {
        //   throw new Error("Failed to add task");
        // }
        console.log("Task deleted successfully!");
        window.location.reload()
      } catch (error) {
        console.error("Error deleting task", error);
      }
    }
  }, [taskId]);

  return <button onClick={DeleteTask} id={taskId}>x</button>

}
export default DeleteTask;

//   useEffect(() => {
//     // DELETE request using fetch with async/await
//     const deletePost = async () => {
//         await fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'DELETE' });
//         setStatus('Delete successful');
//     }

//     deletePost();
// }, []);
  
  

    