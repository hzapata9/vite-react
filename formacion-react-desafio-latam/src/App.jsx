/* eslint-disable no-undef */
import { useState } from 'react'
import './App.css'
import List from './components/list.jsx'
import ItemList from './components/itemlist.jsx'


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

  return (
    <>
      <h1>TO DO List..</h1>
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
