import { useState } from 'react'
import ToDoList from './ToDoList'
import Forma from './Forma'

function ToDo() {
	const [tareas, setTareas] = useState([])

	const agregarTarea = (tarea) => {
		setTareas([...tareas, tarea])
	}

	return (
		<>
			<Forma clickAgregarTarea={agregarTarea}></Forma>
			<ToDoList tareas={tareas}/>
		</>
	)
}

export default ToDo
