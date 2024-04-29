import React, { useEffect, useState } from "react";
import styles from "./TaskList.module.css";
import Task from "../Task/Task";
import { url } from "../utils";
import CreateTask from "../CreateTask/CreateTask";

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (date) {
      const options = { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' };
      const datePart = date.toLocaleDateString('en-GB', options);
      return `${datePart}h`;
    }
  };

  return (
    <>
      <CreateTask refreshTasks={refreshTasks} />
      <div id="tasks" className={styles.container}>
        {allTasks.map((task, i) => (
          <div key={i}>
            <Task
              id={task.id}
              text={task.text}
              date={formatDate(task.date)}
              done={task.done}
              refresh={refresh}
              refreshTasks={refreshTasks}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskList;