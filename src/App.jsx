import styles from "./App.module.css";
import { TaskList } from "./components/TaskList/TaskList";

const App = () => {
  return (
    <>
      <div className={styles.appContainer}>
        <h1>to-dos</h1>
        <h2>what do you want to do next?</h2>
        <TaskList />
      </div>
    </>
  );
};

export default App;
