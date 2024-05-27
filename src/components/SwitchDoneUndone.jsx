import React, { useState } from 'react';
import styles from './SwitchDoneUndone.module.css'
import { url } from "./utils";

const ToggleTaskStatus = ({ id, done }) => {
  const [taskStatus, setTaskStatus] = useState(done);

  const handleToggleClick = () => {
    const updatedStatus = !taskStatus;
    setTaskStatus(updatedStatus);
    updateTaskStatus(updatedStatus);
  };

  const updateTaskStatus = async (updatedStatus) => {
    console.log(id)
    await fetch(`${url}/tasks/${id}`, {
      mode: "no-cors",
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ done: updatedStatus })
    });
  };

  return (
    <button
      id={styles.toggleStatus}
      className={taskStatus ? styles.isDone : undefined}
      onClick={handleToggleClick}
      title={"mark as complete"}>
      {taskStatus && '✓'}
    </button>
  );
};

export default ToggleTaskStatus;
