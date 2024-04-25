import React, { useEffect, useState } from "react";
import styles from "./TaskList.module.css";
//import getTasks from "../../utils/utils";
import Task from "../Task/Task";
import DeleteTask from "../DeleteTask/DeleteTask";
const url = "http://localhost:3000/tasks";

// Usage in parent component
const TaskList = () => {
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
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
  }, []);

  return (
    <div id="tasks" className={styles.container}>
      {allTasks.map((task, i) => (
        <div key={i} className={styles.taskInfos}>
          <Task
            id={task.id}
            text={task.text}
            date={task.date}
            done={task.done}
            //onClick={<DeleteTask />}
          />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
/*
import React, { useEffect, useState } from "react";
import styles from "./TaskList.module.css";

import getTasks from "../../utils/fetches";
import Task from "../Task/Task";

const url = "http://localhost:3000/tasks";

const TaskList = () => {
  const [task, setTask] = useState(null);
  const [allTasks, setAllTasks] = useState();

  useEffect(() => {
    setAllTasks(getTasks());
  }, []);

    return (
      <div id="tasks" className={styles.container}>
        {allTasks &&
          allTasks.map((task, i) => (
            <div key={i} className={styles.taskInfos}>
              <Task 
              id={task.id} 
              text={task.text} 
              date={task.date}
              done={task.done}
              />
            </div>
          ))}
      </div>
    );
  };
};

export default TaskList;
*/

/*
const TasksList = () => {
  const url = "http://localhost:3000/todo/2";
  const [allTasks, setAllTasks] = useState();
  const taskId = 2;

  useEffect(() => {
    const getTask = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.status);
        const data = await response.json();
        setAllTasks(data.id);
        console.log(allTasks);
      } catch (error) {
        console.log(error);
      }
    };

    getTask();
  }, [taskId]);
};
const TasksTest = ({ TasksList }) => {
  return (
    <div id="tasks">
      {TasksList &&
        Object.values(TasksList).map((task, i) => (
          <div key={i}>
            <p>{task.text}</p>
            <p>{task.date.split("T")[0]}</p>
          </div>
        ))}
    </div>
  );
};

export default { TasksList, TasksTest };
*/
