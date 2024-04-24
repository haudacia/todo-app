import React, { useEffect } from "react";
import styles from "./DeleteTask.module.css";
import Button from "../Button/Button";
import deleteTask from "../../utils/fetches";

const DeleteTaskHandler = ({ taskId }) => {
  useEffect(() => {
    const handleDelete = async () => {
      try {
        await deleteTask({ taskId });
        console.log("Successfully deleted task");
      } catch (error) {
        console.error("Error deleting task", error);
      }
    };

    handleDelete();
  }, [taskId]); // Make sure to include taskId as a dependency
};
//Refresh();

export default DeleteTaskHandler;
