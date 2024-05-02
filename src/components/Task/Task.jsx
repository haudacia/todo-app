import handleDelete from "../handleDelete";
import thrashIcon from "./delete_3405244.png";
import hoverThrashIcon from "./output-onlinepngtools.png"
import styles from "./Task.module.css";
import { useState } from "react";
import handleUpdateTask from "../handleUpdateTask";
import ToggleTaskStatus from "../SwitchDoneUndone";

const Task = ({ id, text, date, done, refreshTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [textValue, setTextValue] = useState(text);
  const [dateValue, setDateValue] = useState(date);
  // dateParsed is used to match browser's (Chrome) format (YYYY-MM-DDThh:ss:...) for datetime-local type input type
  // to deal with errors while editing/creating dated tasks
  const [dateParsed, setDateParsed] = useState(dateValue && dateValue.slice(0, -1));

  // console.log('-----DATEVALUE IS', dateValue);

  //The fetch operation requires the date (string) to be in Date format 
  //for the PATCH request to succeed
  const formatDate = () => {
    // checks if any change was performed on datetime input, 
    // during isEditing state.
    if (dateParsed) {
      //transforms string representing date input by user to Date object
      const dateParsedObject = new Date(dateParsed);
      /* gets the numeric difference (minutes) between user input datetime and
      and datetime resulting from the "default" timezone applied by creating Date object */
      const dateTimeOffset = dateParsedObject.getTimezoneOffset();
      // gets adjusted hours, based on the difference detected above
      const adjustedTime = dateParsedObject.getHours() - (dateTimeOffset / 60);
      // sets adjusted hours above to the datetime being updated
      const dateFormatted = dateParsedObject.setHours(adjustedTime);
      console.log('previous was:   ', new Date(dateParsed))
      console.log('ENDED UP AS:   ', new Date(dateFormatted))
      return new Date(dateFormatted)
    }
  }
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log(tz);
  const formatDateForUser = () => {
    const options = {
      timeZone: 'Etc/GMT-2',
      hour: 'numeric',
      minute: '2-digit',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    if (dateParsed !== null) {
      const adjustedTime = new Date(dateParsed).toLocaleString('es-ES', options);
      console.log(adjustedTime, 'now!!!!!!!!--------***')
      return adjustedTime
    }
  }

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
                  <p id={styles.date}>{date}</p>
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
                value={dateParsed}
                id={styles.dateInput}
                onChange={(event) => setDateParsed(event.target.value)}
              />
            </div>
            <div className={styles.editButtons}>
              <button id={styles.createTask}
                onClick={() => {
                  handleUpdateTask({ id, textValue, dateValue: formatDate(), refreshTasks, date });
                  setIsEditing(false)
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


