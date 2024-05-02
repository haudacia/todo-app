import React, { useEffect, useState } from "react";
import styles from "./TaskList.module.css";
import Task from "../Task/Task";
import { url } from "../utils";
import CreateTask from "../CreateTask/CreateTask";
import { handleToggleVisibility } from "../CreateTask/CreateTask";



const TaskList = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const refreshTasks = () => setRefresh(!refresh);

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
          console.log(error)
        }
      };
      getTasks();
      setRefresh(false);
    }
  }, [refresh]);

  return (
    <>
      <CreateTask refreshTasks={refreshTasks} />
      <div id="tasks" className={styles.taskListContainer}>
        {allTasks.map((task, i) => (
          <div key={i}>
            <Task
              id={task.id}
              text={task.text}
              date={task.date}
              done={task.done}
              refresh={refresh}
              refreshTasks={refreshTasks}
            />
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export { TaskList };