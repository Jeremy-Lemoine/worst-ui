import { Container } from "@mantine/core";
import { useFavicon } from "@mantine/hooks";
import "./App.scss";
import LegalCopyright from "./components/LegalCopyright/LegalCopyright";
import ResumeOrRestart from "./components/ResumeOrRestart/ResumeOrRestart";
import Steps from "./components/Steps/Steps";
import Timer from "./components/Timer/Timer";
import NotificationProvider from "./contexts/Notification/NotificationProvider";
import ThemeProvider from "./contexts/Theme/ThemeProvider";

import favicon from "./assets/favicon.ico";

function App() {
	useFavicon(favicon);
	return (
		<ThemeProvider>
			<NotificationProvider />
			<ResumeOrRestart>
				<Timer />
				<Container size="sm" m="auto">
					<Steps />
				</Container>
			</ResumeOrRestart>
			<LegalCopyright />
		</ThemeProvider>
	);
}

export default App;
