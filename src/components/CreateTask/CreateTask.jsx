import React from "react";
import { useForm } from "react-hook-form";
import styles from "./CreateTask.module.css";

const CreateTask = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (formData) => {
    const url = "http://localhost:3000/todos";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to add task");
      }
      console.log("Task added successfully!");
      console.log();
    } catch (error) {
      console.error("Error adding task:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("text")} placeholder="Task Text" />
      <input type="date" {...register("date")} />
      <button>add task</button>
    </form>
  );
};

export default CreateTask;

/*
const CreateTaskButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.CreateTask}>
      +
    </button>
  );
};
*/
