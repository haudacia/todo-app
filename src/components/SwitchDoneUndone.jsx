import React, { useState } from 'react';
import styles from './SwitchDoneUndone.module.css'

const ToggleTaskStatus = ({ id, done }) => {
  const [taskStatus, setTaskStatus] = useState(done);
  const url = "http://localhost:3000/tasks";

  const handleToggleClick = () => {
    const updatedStatus = !taskStatus;
    setTaskStatus(updatedStatus);
    updateTaskStatus(updatedStatus);
  };

  const updateTaskStatus = async (updatedStatus) => {
    await fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ done: updatedStatus })
    });
  };

  return (
    <button
      className={taskStatus ? styles.isDone : styles.isPending}
      onClick={handleToggleClick}
      title={"mark as complete"}>
      <p>{taskStatus && '✓'}</p>
    </button>
  );
};

export default ToggleTaskStatus;
