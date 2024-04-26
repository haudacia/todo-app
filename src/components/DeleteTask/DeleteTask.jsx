import React from "react";

const DeleteTask = ({ taskId }) => {
  //const const [deleted, setDeleted] = useState(false);
  const url = "http://localhost:3000/tasks";

  const deleteTask = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this task?");
    if (confirmed) {
      try {
        await fetch(`${url}/${taskId}`, {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log("Task deleted successfully!");
        window.location.reload();
        setDeleted(true);
      } catch (error) {
        console.error("Error deleting task", error);
      }
    }
  };
  // Render the button directly, onClick will call deleteTask
  return <button onClick={deleteTask}>x</button>;
};

export default DeleteTask;