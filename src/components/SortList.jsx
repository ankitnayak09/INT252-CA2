import React, { useEffect, useState } from "react";

function SortList() {
	const [list, setList] = useState([11, 32, 22, 45, 33]);
	const [sortType, setSortType] = useState("");

	const [n1, setN1] = useState("");

	useEffect(() => {
		if (sortType == "i") setList(list.sort((a, b) => b - a));
		else setList(list.sort((a, b) => a - b));
	}, [sortType]);

	function handleSubmit(e) {
		e.preventDefault();
		setList([...list, parseInt(n1)]);
	}

	function handleReset() {
		setList([]);
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>Add Numbers </label>
				<input type="number" onChange={(e) => setN1(e.target.value)} />
			</form>
			<div>
				<br />
				<button onClick={() => setSortType("i")}>Increasing</button>
				<button onClick={() => setSortType("d")}>Decreasing</button>
			</div>
			<br />
			<div className="numberList">
				{list.map((item, index) => (
					<div key={index}> {item} </div>
				))}
			</div>
			<button onClick={handleReset}>Reset List</button>
		</div>
	);
}

export default SortList;
