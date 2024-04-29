import handleDelete from "../handleDelete";
import styles from "./Task.module.css";
import { useState } from "react";
import handleUpdateTask from "../handleUpdateTask";
import handleCheckboxChange from "../handleToggleDone";
import SwitchDoneUndone from "../SwitchDoneUndone";

const Task = ({ id, text, date, done, refresh, refreshTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [textValue, setTextValue] = useState(text);
  const [dateValue, setDateValue] = useState(date);

  return (
    <>
      {
        !isEditing && (
          < div className={styles.wrapper}>
            {<SwitchDoneUndone
              id={id}
              done={done}
            />}
            <button onClick={() => handleCheckboxChange({ id, refreshTasks, done })}>o</button>
            <input
              type="checkbox"
              checked={done}
              onChange={() => handleCheckboxChange({ id, refreshTasks, done })}
            />
            <button onClick={() => handleDelete({ id, refreshTasks })}>x</button>

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
          <div className={styles.wrapper}>
            <input type="text" value={textValue} onChange={(event) => setTextValue(event.target.value)} />
            <input type="datetime-local" value={dateValue} onChange={(event) => setDateValue(event.target.value)} />
            <button onClick={() => {
              handleUpdateTask({ id, textValue, dateValue, refreshTasks });
              setIsEditing(false)
            }}
            >ok</button>
            <button onClick={() => setIsEditing(false)}>cancel</button>
          </div>
        )
      }
    </>
  )
};

export default Task;


