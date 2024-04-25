import React from "react";
import { useForm } from "react-hook-form";
import styles from "./CreateTask.module.css";
import Button from "../Button/Button";
//import refreshPage from "../../utils/fetches";

const CreateTask = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (formData) => {
    const url = "http://localhost:3000/tasks";
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
      console.log("Task added successfully!", formData);
      window.location.reload()
    } catch (error) {
      console.error("Error adding task:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("text")} required={true} />
      <input type="date" {...register("date")} />
      <Button id={styles.addTask} content="✔" />
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
