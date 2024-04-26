import Button from "../Button/Button";
import DeleteTask from "../DeleteTask/DeleteTask";
//import MarkAsDone from "../MarkAsDone";
import styles from "./Task.module.css";
import SwitchDoneUndone from "../SwitchDoneUndone/SwitchDoneUndone"


const Task = ({ id, text, date, done }) => {
  console.log(done);
  return (
    <div className={styles.wrapper}>
      <SwitchDoneUndone 
      taskId={id} 
      taskDone={done} 
      />
      <div>
        <h3>{text}</h3>
        <p>{date}</p>
        <p>{done}</p>
      </div>
      <DeleteTask taskId={id}/>
    </div>
  );
};

export default Task;


