import styles from "./App.module.css";
import CreateTask from "./components/CreateTask/CreateTask";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import TaskList from "./components/TaskList/TaskList";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="create-task" element={<CreateTask />} />
        </Route>
      </Routes>

      <div className={styles.container}>
        <TaskList />
      </div>
    </>
  );
};

export default App;
