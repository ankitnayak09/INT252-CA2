import React, { useState } from "react";

function Queue() {
	const [queue, setQueue] = useState([]);
	const [num, setNum] = useState(null);

	const enqueue = (item) => {
		setQueue([...queue, item]);
	};

	const dequeue = () => {
		if (queue.length === 0) {
			return null;
		}
		const item = queue[0];
		setQueue(queue.slice(1));
		return item;
	};

	const front = () => {
		if (queue.length === 0) {
			return null;
		}
		return queue[0];
	};

	const size = () => {
		return queue.length;
	};

	const isEmpty = () => {
		return queue.length === 0;
	};

	function handleSubmit(e) {
		e.preventDefault();
		enqueue(num);
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>Enter Number : </label>
				<input type="number" onChange={(e) => setNum(e.target.value)} />
				<br />
				<br />
				<button type="submit">Enqueue</button>
			</form>
			<br />
			<button onClick={() => dequeue()}>Dequeue</button>
			<div>
				{isEmpty() && <div>Queue is Empty</div>}
				{queue.map((item, index) => (
					<span key={index} className="queueItem">
						{" "}
						{item}{" "}
					</span>
				))}
			</div>
			{!isEmpty() && (
				<p>
					Front: <b>{front()}</b>
				</p>
			)}
			<p>
				Size: <b>{size()}</b>
			</p>
		</div>
	);
}

export default Queue;
