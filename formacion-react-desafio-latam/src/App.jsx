/* eslint-disable no-undef */
import { useState } from 'react'
import './App.css'
import List from './components/list.jsx'
import ItemList from './components/itemlist.jsx'
import { Link } from "react-router";
import { useEffect } from 'react';
import { getPosts, getPostsWithAxios } from './services/api.js';

function App() {
  //const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState([]);
  const [tareaInput, setTareaInput] = useState('');

  const agregarTarea = (tareaNueva) => {
    if (tareaNueva) {
      setTasks([...tasks, tareaNueva]);
      //input.value = '';
    }
  }
  const eliminarTarea = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  useEffect(() => {
    getPosts().then((post) => {console.log(post) })
      .catch((error) => {
        console.error('Error fetching posts:', error);
    });

    getPostsWithAxios().then((post) => {console.log(post) })
      .catch((error) => {
        console.error('Error fetching posts Axios:', error);
    });
  }, []);

  return (
    <>
      <h1>TO DO List..</h1>
      <Link to="/hola">Go Path Hola</Link>
      <br />
      <div className="card">

        <input type="text" placeholder="Escribe una tarea" value={tareaInput} onChange={(e) =>setTareaInput(e.target.value)} />
        <button onClick={() => agregarTarea(tareaInput)}>Agregar</button>
        <List>
          {tasks.map((tarea, index) => (
            <ItemList key={index}>
              {tarea} 
              <button onClick={() => eliminarTarea(index)}>Eliminar</button>
            </ItemList>
          ))}
        </List>
      </div>

    </>
  )
}

export default App
