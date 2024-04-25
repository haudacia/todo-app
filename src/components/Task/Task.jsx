import Button from "../Button/Button";
import DeleteTask from "../DeleteTask/DeleteTask";
//import MarkAsDone from "../MarkAsDone";
import styles from "./Task.module.css";


const Task = ({ id, text, date, done, onClick }) => {
  return (
    //
    <div className={styles.wrapper}>
      <Button onClick={onClick} id="done" content="done" />
      <div>
        <h3>{text}</h3>
        <p>{date}</p>
        <p>{done}</p>
        <DeleteTask taskId={id} />

      </div>
    </div>
  );
};

export default Task;
