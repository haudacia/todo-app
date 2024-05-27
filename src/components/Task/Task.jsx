import handleDelete from "../handleDelete";
import thrashIcon from "./delete_3405244.png";
import hoverThrashIcon from "./output-onlinepngtools.png"
import styles from "./Task.module.css";
import { useState } from "react";
import handleUpdateTask from "../handleUpdateTask";
import ToggleTaskStatus from "../SwitchDoneUndone";
import { formatDateForUser, dateStrToObj, isToday } from "../utils";

const Task = ({ _id, text, date, done, refreshTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [textValue, setTextValue] = useState(text);
  /* dateValue is used to match browser's (Chrome) 
  format (YYYY-MM-DDThh:ss without Z at the end) 
  for datetime-local input type to deal with errors 
  while editing/creating dated tasks */
  const [dateValue, setDateValue] = useState(date && date.slice(0, -1));
  const [dateForUser, setDateForUser] = useState(formatDateForUser(date));
  +
  return (
    <div>
      {
        !isEditing && (
          <div className={styles.taskWrapper}>
            <div className={styles.statusAndTexts}>
              {<ToggleTaskStatus
                id={_id}
                done={done}
              />}
              <div className={styles.texts}>
                <a title="click to edit the task"
                  onClick={() => setIsEditing(true)}>
                  <p id={styles.text}>{text}</p>
                  <p id={styles.date}>
                    {
                      (dateValue ? `${formatDateForUser(dateValue)}` : '')
                    }
                  </p>
                </a>
              </div>
            </div>

            <a
              onClick={() => handleDelete({ _id, refreshTasks })}
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
                  handleUpdateTask({ _id, textValue, dateValue: dateStrToObj(dateValue), refreshTasks, date });
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


