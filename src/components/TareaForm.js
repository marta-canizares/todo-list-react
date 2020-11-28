import React, { useState } from 'react';
import '../App.css';

const TareaForm = (props) => {

    const [inputText, setInputText] = useState("");
    const [validacion, setValidacion] = useState(true);

    
    // Recoger la info del formulario
    const manejarFormulario = (event) => {
        setInputText(event.target.value);
        //console.log(inputText)
    }


    // Añadir tarea 
    const añadirTarea = (event) => {
        event.preventDefault();
        if (inputText.trim() !== "") {
            props.nuevaTarea(inputText); 
            setInputText("")
            setValidacion(true);
        } else {
            setValidacion(false);
        }
    
    }


    // Formulario 
    return (
        <div className="row">
            <form className="form form-group col-6" onSubmit={añadirTarea}>
            <label>Añadir Tarea: </label>
                <input className="form-control" id="añadirTarea" placeholder="Introduzca una tarea" value={inputText} onChange={manejarFormulario}/>
                <button className="btn btn-success mt-3 col-12">Añadir</button>

                {
                !validacion &&
                <div className="validacion">Añada una tarea, por favor</div>
                }
            </form>
        </div>
     
    )
}

export default TareaForm;

