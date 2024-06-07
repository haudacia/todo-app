import React, { useState } from 'react';
import styles from './SwitchDoneUndone.module.css'
import { baseUrl } from "./utils";

const ToggleTaskStatus = ({ id, done }) => {
  const [taskStatus, setTaskStatus] = useState(done);

  const handleToggleClick = () => {
    const updatedStatus = !taskStatus;
    setTaskStatus(updatedStatus);
    updateTaskStatus(updatedStatus);
  };

  const updateTaskStatus = async (updatedStatus) => {
    console.log(id)
    await fetch(`${baseUrl}/tasks/${id}`, {
      method: "PATCH",
      //credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ done: updatedStatus })
    });
  };

  return (
    <button
      id={styles.toggleStatusButton}
      className={taskStatus ? styles.isDone : undefined}
      onClick={handleToggleClick}
      title={"mark as complete"}>
      {taskStatus && '✓'}
    </button>
  );
};

export default ToggleTaskStatus;
