import handleDelete from "../handleDelete";
//import MarkAsDone from "../MarkAsDone";
import styles from "./Task.module.css";
import SwitchDoneUndone from "../SwitchDoneUndone/SwitchDoneUndone"
import { Form } from "react-hook-form";
import { useState } from "react";
import handleUpdateTask from "../handleUpdateTask";



const Task = ({ id, text, date, done, refreshTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [textValue, setTextValue] = useState(undefined);
  const [dateValue, setDateValue] = useState(undefined);

  const handleUpdate = () => {
    if (onSave) {
      onSave(inputValue);
      setInputValue(text);
    }
  };

  return (
    <>
      {!isEditing && (
        < div className={styles.wrapper}>
          <SwitchDoneUndone
            id={id}
            done={done}
          />
          <a title="double click to edit the task"
            onDoubleClick={() => setIsEditing(true)}>
            <div>
              <input type="checkbox" id={styles.mycheck} onChange={(e) => e.target.checked}></input>
              <p>{text}</p>
              <p>{date}</p>
              <p>{done}</p>
            </div>
            <button onClick={() => handleDelete({ id, refresh, refreshTasks })}> x</button>;

          </a>
        </div >
      )}
      {
        isEditing && (
          <div>
            <input value={textValue} onChange={(event) => setTextValue(event.target.value)} />
            <input type={date} value={dateValue} onChange={(event) => setDateValue(event.target.value)} />
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


