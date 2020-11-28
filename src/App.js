import React,{useState} from 'react';
import TareaForm from './components/TareaForm';
import Tarea from './components/Tarea';

// Estilos
import 'bootstrap/dist/css/bootstrap.min.css' 
import {Helmet} from "react-helmet";
import './App.css';



function App() {


  const [listaTareas, setListaTareas] = useState([]);

  // añadir nueva tarea
  const nuevaTarea = (tarea) => {
    setListaTareas([tarea, ...listaTareas])
  }

  // console.log del array 
 // console.log(listaTareas);

  // borrar una tarea
  const borrar = (id) => {
    const listaFiltrada = listaTareas.filter((e, index) => index !== id) 
    setListaTareas(listaFiltrada);
  }


  // actualizar la tarea
  const actualizarTarea = (id, tarea) => {
    const listaActualizada = listaTareas.map((e, index) => {
      if (index === id) {
        e = tarea;
      }
      return e;
    })
    setListaTareas(listaActualizada);
  }



  return (

    <div className="App">
  
      <Helmet>
      <style>{"body { background-color: #f5f7f1; }"}</style>
      </Helmet>
      
      
      
      <TareaForm nuevaTarea={nuevaTarea} />

      <div className="listaTareas">
      {
          listaTareas.map((tarea, index) => <Tarea
                                      key= {index}
                                      tarea={tarea}
                                      borrar={borrar}
                                      id={index}
                                      editar={actualizarTarea}
            />)
      } 
      </div>
      
    </div>


    

  );
}

export default App;
