import { Container, Space } from "@mantine/core";
import {} from "@mantine/hooks";
import "./App.scss";
import LegalCopyright from "./components/LegalCopyright/LegalCopyright";
import ResumeOrRestart from "./components/ResumeOrRestart/ResumeOrRestart";
import Steps from "./components/Steps/Steps";
import Timer from "./components/Timer/Timer";
import NotificationProvider from "./contexts/Notification/NotificationProvider";
import ThemeProvider from "./contexts/Theme/ThemeProvider";

function App() {
	return (
		<ThemeProvider>
			<NotificationProvider />
			<ResumeOrRestart>
				<Timer />
				<Space h="xl" />
				<Container size="sm" m="auto">
					<Steps />
				</Container>
			</ResumeOrRestart>
			<LegalCopyright />
		</ThemeProvider>
	);
}

export default App;
