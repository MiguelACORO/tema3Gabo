function Card() {
	return (
		<>
			<div className="card shadow">
				<img
					src="https://picsum.photos/500/300"
					className="card-img-top"
					alt="Lorem Picsum"
				/>
				<div className="card-body">
					<h5 className="card-title">Card Title</h5>
					<p className="card-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium culpa
						molestiae distinctio voluptatibus minus.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</>
	)
}

export default Card
