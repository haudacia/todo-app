import React, { useEffect, useState } from "react";
import styles from "./TaskList.module.css";
import Task from "../Task/Task";
const url = "http://localhost:3000/tasks";

// Usage in parent component
const TaskList = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const refreshTasks = () => setRefresh(true);

  useEffect(() => {
    if (refresh) {
      const getTasks = async () => {
        try {
          const response = await fetch(url);
          if (response.ok) {
            const data = await response.json();
            setAllTasks(data);
          } else {
            throw new Error(response.status);
          }
        } catch (error) {
          console.log(error);
        }
      };
      getTasks();
      setRefresh(false);
    }
  }, [refresh]);

  return (
    <div id="tasks" className={styles.container}>
      {allTasks.map((task, i) => (
        <div key={i} className={styles.taskInfos}>
          <Task
            id={task.id}
            text={task.text}
            date={task.date}
            done={task.done}
            refreshTasks={refreshTasks}
          />
        </div>
      ))}
    </div>
  );
};

export default TaskList;