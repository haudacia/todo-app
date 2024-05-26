import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./CreateTask.module.css";
import { url } from '../utils';

const CreateTask = ({ refreshTasks }) => {
  const { register, handleSubmit, reset } = useForm();
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (formData) => {
    try {
      const response = await fetch('https://todo-app-server-cc9x.onrender.com/tasks', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        setAllTasks(data);
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      console.log(error)
    }
  };

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {isVisible && (
        <div className={styles.newTaskContainer}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("text")} required={true} />
            <input type="datetime-local" {...register("date")} />
            <button type="submit" title={"create task"} id={styles.submitTask}>
              ok
            </button>
          </form>
        </div>
      )}
      <button
        onClick={handleToggleVisibility}
        title='add new task'
        className={styles.createTaskButton}>
        +
      </button>
    </div>
  );
};

export default CreateTask;
