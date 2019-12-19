import React from "react";

export const Panda = () => {
	return (
		<>
			<div className="jumbotron">
				<h1 className="display-4">Hello, panda!</h1>
				<p className="lead">pandas are cute yo</p>
			</div>

			<div className="input-group mb-3">
				<div className="input-group-prepend">
					<button className="btn btn-outline-secondary" type="button" id="button-addon1">
						Button
					</button>
				</div>
				<input
					type="text"
					className="form-control"
					placeholder
					aria-label="Example text with button addon"
					aria-describedby="button-addon1"
				/>
			</div>
		</>
	);
};
