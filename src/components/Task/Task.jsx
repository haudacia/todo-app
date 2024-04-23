import DeleteTask from "../../utils/fetches";
import Button from "../Button/Button";

const Task = ({ id, text, date, done }) => {
  const handleDelete = () => {
    <DeleteTask taskId={id} />;
  };

  return (
    <div>
      <Button onClick={() => (props.done = True)} id="button-done" />
      <p>{props.text}</p>
      <p>{props.date}</p>
      <Button onClick={handleDelete} content="delete" />
    </div>
  );
};

export default Task;
