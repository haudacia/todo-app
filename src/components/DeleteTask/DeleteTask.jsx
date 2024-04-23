import React, { useEffect } from "react";
import styles from "./DeleteTask.module.css";
import Button from "../Button/Button";
import deleteTask from "../../utils/fetches";

const DeleteTaskHandler = ({ taskId }) => {
  useEffect(() => {
    deleteTask({ taskId })
      .then(() => {
        console.log("successfully deleted task");
      })
      .catch((error) => console.log("Error deleting task", error));
  }, [taskId]);

  return <Button onClick={DeleteTaskHandler} content="x" />;
};
//Refresh();

export default DeleteTaskHandler;
