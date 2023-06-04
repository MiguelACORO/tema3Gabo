import './App.css'
import Title from './components/Title'
import ToDo from './components/ToDo'

import { useState } from 'react'

function App() {
	return (
		<>
			<div className="nav nav-dark bg-black text-light p-3">
				<h1 className="text-center mx-auto">React con bootstrap</h1>
			</div>
			<div className="container my-3">
				<Title title="ToDo" />
				<ToDo />
			</div>
		</>
	)
}

export default App
