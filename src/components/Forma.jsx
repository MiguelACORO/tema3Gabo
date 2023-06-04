import { useState } from 'react'

function Forma({ clickAgregarTarea }) {
	const [textoInput, setTextoInput] = useState('')

	const agregarTarea = (e) => {
		e.preventDefault()
		clickAgregarTarea(textoInput)
		setTextoInput('')
	}

	const cambiarTexto = (e) => {
		setTextoInput(e.target.value)
	}

	return (
		<>
			<div className="formulario mb-3">
				<form>
					<div className="mb-2">
						<input
							type="text"
							className="form-control"
							placeholder="tarea..."
							value={textoInput}
							onChange={cambiarTexto}
						></input>
					</div>

					<div className="row w-100 m-0">
						<button
							type="submit"
							className="btn btn-primary form-control w-100"
							onClick={agregarTarea}
						>
							Agregar Tarea
						</button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Forma
