import handleDelete from "../handleDelete";
import thrashIcon from "./delete_3405244.png";
import hoverThrashIcon from "./output-onlinepngtools.png"
import styles from "./Task.module.css";
import { useState } from "react";
import handleUpdateTask from "../handleUpdateTask";
import ToggleTaskStatus from "../SwitchDoneUndone";
import { formatDateForUser, dateStrToObj, isToday } from "../utils";

const Task = ({ id, text, date, done, refreshTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [textValue, setTextValue] = useState(text);
  // dateValue is used to match browser's (Chrome) format (YYYY-MM-DDThh:ss:...) for datetime-local type input type
  // to deal with errors while editing/creating dated tasks
  const [dateValue, setDateValue] = useState(date && date.slice(0, -1));
  const [dateForUser, setDateForUser] = useState(formatDateForUser(date));
  console.log(new Date().getDate())
  console.log('date type (right after saving new task) is---', typeof dateValue);
  //fetch (PATCH) requires date (string) to be a Date object 
  console.log(isToday(new Date(dateValue)), new Date(dateValue));


  return (
    <div>
      {
        !isEditing && (
          <div className={styles.taskWrapper}>
            <div className={styles.statusAndTexts}>
              {<ToggleTaskStatus
                id={id}
                done={done}
              />}
              <div className={styles.texts}>
                <a title="click to edit the task"
                  onClick={() => setIsEditing(true)}>
                  <p id={styles.text}>{text}</p>
                  <p id={styles.date}>{(dateValue ? `${dateForUser}h` : '')}</p>
                </a>
              </div>
            </div>

            <a
              onClick={() => handleDelete({ id, refreshTasks })}
              className={styles.deleteTask}>
              <img id={styles.thrashIcon} src={thrashIcon} />
              <img id={styles.hoverThrashIcon} src={hoverThrashIcon} />
            </a>
          </div >
        )
      }
      {
        isEditing && (
          <div className={styles.isEditing}>
            <div id={styles.editInput}>
              <input
                type="text"
                value={textValue}
                id={styles.textInput}
                onChange={(event) => setTextValue(event.target.value)}
              />
              <input
                type="datetime-local"
                value={dateValue}
                id={styles.dateInput}
                onChange={(event) => setDateValue(event.target.value)}
              />
            </div>
            <div className={styles.editButtons}>
              <button id={styles.createTask}
                onClick={() => {
                  handleUpdateTask({ id, textValue, dateValue: dateStrToObj(dateValue), refreshTasks, date });
                  setIsEditing(false);
                  setDateForUser(formatDateForUser(dateValue))
                }}
              >
                ok
              </button>
              <button onClick={() => {
                setIsEditing(false);
                setTextValue(text)
              }
              }>cancel</button>
            </div>
          </div>
        )
      }
    </div >
  )
};

export default Task;


