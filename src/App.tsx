import "./App.scss";
import LegalCopyright from "./components/LegalCopyright";
import ThemeProvider from "./components/Theme/ThemeProvider";
import Welcome from "./components/Welcome/Welcome";
import Center from "./components/utils/layout/Center";

function App() {
	return (
		<ThemeProvider>
			<Center>
				<Welcome />
			</Center>
			<LegalCopyright />
		</ThemeProvider>
	);
}

export default App;
