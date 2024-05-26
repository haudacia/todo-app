import React from "react";
import { useForm } from "react-hook-form";
import styles from "./CreateTask.module.css";
import { useState } from 'react';
import { url } from '../utils';

const CreateTask = ({ refreshTasks }) => {
  const { register, handleSubmit, reset } = useForm();
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = (formData) => {
    fetch('https://todo-app-3brv.onrender.com', {
      method: "POST",
      mode: 'no-cors', // Isso impede que você acesse a resposta
      credentials: 'include', // Incluir credenciais se necessário
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to add task");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Task added successfully!", formData);
        refreshTasks(data);
        handleToggleVisibility();
        reset('');
      })
      .catch((error) => {
        console.error("Error adding task:", error.message);
      });
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
