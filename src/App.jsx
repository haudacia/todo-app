import styles from "./App.module.css";
import CreateTask from "./components/CreateTask/CreateTask";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import TaskList from "./components/TaskList/TaskList";
import DeleteTask from "./components/DeleteTask/DeleteTask";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route path="create-task" element={<CreateTask />} />
        </Route>
      </Routes>

      <div className={styles.container}>
        <h1>To-Do List</h1>
        <TaskList />

      </div>
    </>
  );
};

export default App;
/*

const App = () => {
  const [data, setData] = useState(null);

  const getData = async() => {
    const response=await fetch(url);
    setData(response.data)
  }
  useEffect(() => {
    getData()
  },[]);
  
  return (
    <div>
      {data}
    </div>
  )
}
*/
/*const App = () => {

  useEffect(() => {
    const getTask = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.status);
        const data = await response.json();
        setTask(data.text);
      } catch (error) {
        console.log(error);
      }
    };
    getTask();
  }, []);

  return <p>a</p>;
};

*/
/*
const App = () => {
  const [formData, setFormData] = useState({});
  /*const { register, handleSubmit } = useForm();

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.id]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
    }));
  };

  const onSubmit = (data) => {
    const { firstName } = data;
    if (firstName.length < 3) {
      setError('too_short');
      return;
    }
    setError(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='firstName'>Nombre:</label>
        <input type='text' id='firstName' {...register('firstName')} value={formData.firstName || ''} onChange={handleChange} />
        <label htmlFor='color'>Color favorito:</label>
        <input type='color' id='color' value={formData.color || '#000000'} onChange={handleChange} name='color' />
        <label htmlFor='completed'>Completado:</label>
        <input type='checkbox' id='completed' checked={formData.completed || false} onChange={handleChange} name='completed' />
        <input type='submit' value='Enviar' />
        {error === 'too_short' && <p>El nombre es demasiado corto.</p>}
      </form>
      <MyTask />
    </div>
  );
}
export default App;

/*
import './App.css'
import {useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';



const HookForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor='firstName'>nombre:</label>
    <input type="text" id="firstName" value={formData.firstName} name='firstName' onChange={handleChange} />
    <label htmlFor='color'>color favorito: </label>
    <input type='color' id='color' value={formData.color} onChange={handleChange} name='color' />
    <label htmlFor='completed'>completed: </label>
    <input type='checkbox' id='completed' value={formData.completed} onChange={handleChange} name='completed' />
    <input type='submit' value='enviar' />
    <p>{error === "too_short"}</p>
  </form>

  )
};

export default HookForm;

*/
