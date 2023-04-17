import React, { useState } from "react";

function AddNumbers() {
	const [n1, setN1] = useState("");
	const [n2, setN2] = useState("");
	const [result, setResult] = useState("");
	const [error, setError] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		if (n1 == "" || n2 == "") {
			setError("Inputs are Empty");
			setTimeout(() => {
				setError("");
			}, 3000);
			return;
		}
		setResult(parseInt(n1) + parseInt(n2));
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="number"
					value={n1}
					onChange={(e) => setN1(e.target.value)}
					placeholder="Enter Number 1"
				/>
				<input
					type="number"
					value={n2}
					onChange={(e) => setN2(e.target.value)}
					placeholder="Enter Number 2"
				/>
				<button type="submit">Add</button>
			</form>
			<div>{result}</div>
			<div className="error-message">{error}</div>
		</div>
	);
}

export default AddNumbers;
