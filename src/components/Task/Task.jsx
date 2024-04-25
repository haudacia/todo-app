import Button from "../Button/Button";
import DeleteTask from "../DeleteTask/DeleteTask";
//import MarkAsDone from "../MarkAsDone";
import styles from "./Task.module.css";


const Task = ({ id, text, date, done }) => {
  return (
    //
    <div className={styles.wrapper}>
      <Button id={styles.switchDoneUndone} content="" />
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
