import { Container } from "@mantine/core";
import {} from "@mantine/hooks";
import "./App.scss";
import LegalCopyright from "./components/LegalCopyright";
import ThemeProvider from "./components/Theme/ThemeProvider";
import Timer from "./components/Timer/Timer";
import Welcome from "./components/Welcome/Welcome";
import ResumeOrRestart from "./components/ResumeOrRestart/ResumeOrRestart";

function App() {
	return (
		<ThemeProvider>
			<ResumeOrRestart>
				<Timer />
				<Container size="sm" m="auto">
					<Welcome />
				</Container>
			</ResumeOrRestart>
			<LegalCopyright />
		</ThemeProvider>
	);
}

export default App;
