import React from "react";
import { useForm } from "react-hook-form";
import styles from "./CreateTask.module.css";
import { useState } from 'react';
import { url } from '../utils';

const CreateTask = ({ refreshTasks }) => {
  const { register, handleSubmit, reset } = useForm();
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (formData) => {
    try {
      const response = await fetch('https://todo-app-server-cc9x.onrender.com/tasks', {
        method: 'POST',
        //credentials: 'include', // Incluir credenciais se necessário
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Task added successfully!", formData);
        refreshTasks(data);
        handleToggleVisibility();
        reset('');
      } else {
        const errorData = await response.json();
        throw new Error(`Failed to add task: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error adding task:", error.message);
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

export const handleToggleVisibility = CreateTask.handleToggleVisibility;

export default CreateTask;
