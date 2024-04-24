import DeleteTask from "../../utils/fetches";
import Button from "../Button/Button";
import DeleteTaskHandler from "../DeleteTaskHandler/DeleteTaskHandler";

const Task = ({ id, text, date, done, onClick }) => {
  return (
    <div>
      <Button onClick={() => (props.done = True)} id="button-done" />
      <p>{props.text}</p>
      <p>{props.date}</p>
      <Button onClick={onClick} content="delete" />
    </div>
  );
};

export default Task;
