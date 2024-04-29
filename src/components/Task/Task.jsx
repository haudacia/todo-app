import handleDelete from "../handleDelete";
import styles from "./Task.module.css";
import { useState } from "react";
import handleUpdateTask from "../handleUpdateTask";
import ToggleTaskStatus from "../SwitchDoneUndone";

const Task = ({ id, text, date, done, refreshTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [textValue, setTextValue] = useState(text);
  const [dateValue, setDateValue] = useState(date);

  return (
    <>
      {
        !isEditing && (
          < div className={styles.taskWrapper}>
            <div id={styles.taskButtons}>
              {<ToggleTaskStatus
                id={id}
                done={done}
              />}

              <button onClick={() => handleDelete({ id, refreshTasks })} className={styles.deleteButton}></button>
            </div>
            <a title="double click to edit the task"
              onDoubleClick={() => setIsEditing(true)}>
              <div>
                <p>{text}</p>
                <p>{date}</p>
                <p>{done}</p>
              </div>
            </a>
          </div >
        )}
      {
        isEditing && (
          <div className={styles.isEditing}>
            <div id={styles.editInput}>
              <input type="text" value={textValue} onChange={(event) => setTextValue(event.target.value)} />
              <input type="datetime-local" value={dateValue} onChange={(event) => setDateValue(event.target.value)} />
            </div>
            <div id={styles.editButtons}>

              <button onClick={() => {
                handleUpdateTask({ id, textValue, dateValue, refreshTasks });
                setIsEditing(false)
              }}
              >ok</button>
              <button onClick={() => setIsEditing(false)}>cancel</button>
            </div>
          </div>
        )
      }
    </>
  )
};

export default Task;


