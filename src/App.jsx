import styles from "./App.module.css";
import TaskList from "./components/TaskList/TaskList";

const App = () => {
  return (
    <div className={styles.appContainer}>
      <TaskList />
    </div>
  );
};

export default App;
