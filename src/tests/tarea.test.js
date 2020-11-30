import React from 'react';
import { shallow} from 'enzyme'


// componentes
import TareaForm from './components/TareaForm';
import Tarea from './components/Tarea';
import { nuevaTarea } from '../App'



describe('pruebas en funciones de tareas', () => {

    test('debe de mostrar <TareaForm/> correctamente', () => {
        const wrapper = shallow(<TareaForm nuevaTarea={'Jugar al tenis'}/>)
    })


    test('añadir tarea', () => {
        const tarea1 = 'Jugar al futbol'
    const result = añadirTarea(nuevaTarea('jugar al tenis'));
    expect(result.length).toBe(3)
    expect(result).toContain({ tarea: 'jugar al tenis'})
    })


    test('borrar tarea', () => {
    const wrapper2 = render(<App/>)
    const result = Tarea.borrarTarea(1)
    expect(result).not.toContain(1)
    })


})


