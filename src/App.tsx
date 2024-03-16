import "./App.scss";
import LegalCopyright from "./components/LegalCopyright";
import Welcome from "./components/Welcome/Welcome";
import Center from "./components/utils/layout/Center";

function App() {
	return (
		<>
			<Center>
				<Welcome />
			</Center>
			<LegalCopyright />
		</>
	);
}

export default App;
