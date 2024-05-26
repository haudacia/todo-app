import styles from "./App.module.css";
import { TaskList } from "./components/TaskList/TaskList";

const App = () => {
  return (
    <>
      <div className={styles.appContainer}>
        <h1>to-dos</h1>
        <TaskList />
      </div>
    </>
  );
};

export default App;
