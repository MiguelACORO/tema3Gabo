function ToDoList({ tareas }) {
	return (
		<>
			<ul className="list-group">
				{tareas.map((tarea) => (
					<li key={tarea} className={'list-group-item'}>
						{tarea}
					</li>
				))}
			</ul>
		</>
	)
}

export default ToDoList
