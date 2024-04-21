//import { response } from 'express';
import './App.css';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
//import { use } from '../../reto-5-todo-api-haudacia/src/routers/todo';

const App = () => {
  const url = 'http://localhost:3000/todo/1';
  const [task, setTask] = useState(null);
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

  return <p>{task}</p>
};

export default App;