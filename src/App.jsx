import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SortList from "./components/SortList";
import AddNumbers from "./components/AddNumbers";
import Queue from "./components/Queue";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<h2>Sort List</h2>
			<SortList />
			<br />
			<hr />
			<br />
			<h2>Add Numbers</h2>
			<AddNumbers />
			<br />
			<hr />
			<br />
			<h2>Queue Implementation</h2>
			<Queue />
		</div>
	);
}

export default App;
