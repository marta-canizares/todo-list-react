import React, { useState } from 'react';
import '../App.css';
import 'font-awesome/css/font-awesome.min.css'

const Tarea = (props) => {

    const [modoEdit, setModoEdit] = useState(false);
    const [editText, setEditText] = useState("");


    // Editar una tarea existente
    const editar = () => {
        setModoEdit(true);
    }

    // manejar el editar
    const manejarEdit=(event) => {
        setEditText(event.target.value)
    }

    // hacer el submit del formulario con el editar
    const submitEdit = (event) => {
        event.preventDefault();
        props.editar(props.id, editText)
        setEditText("");
        setModoEdit(false);
        
    }


    // borrar una tarea con el id
    const borrarTarea = () => {
        props.borrar(props.id)
    }
    

    // pintar una tarea y editarla 
    return (
        <div>
            {
                !modoEdit ?
                    // pintar una tarea
                <div className="tarea">
                    <span>{props.tarea}</span>
                    <span onClick={editar}><i class="fa fa-pencil" aria-hidden="true"></i></span>
                    <span onClick={borrarTarea}><i class="fa fa-trash" aria-hidden="true"></i></span>
                </div>
                    :
                    // editar una tarea
                    <form className="formEdit form-group col-6" onSubmit={submitEdit}>
                        <input className="input-group" placeholder="Edite su tarea" value={editText} onChange={manejarEdit}/> <button className="btn btn-primary mt-3 col-12">Guardar</button>
                    </form>
            }
           
        </div>
    )

}

export default Tarea;