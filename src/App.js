import "./App.css";
import Card from "./components/Card";
// import State from './components/State'
// import RandomNumberCard from "./components/RandomNumberCard";

function App() {
	const arr = [];
	for (let i = 1; i <= 898; i++) {
		arr.push(i);
	}
	return (
		<div className="App">
			{arr.map((m) => (
				<Card id={m} />
			))}
			{/* <RandomNumberCard /> */}
		</div>
	);
}

export default App;
