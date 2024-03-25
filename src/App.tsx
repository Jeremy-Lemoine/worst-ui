import "@/App.scss";
import LegalCopyright from "@components/LegalCopyright/LegalCopyright";
import ResumeOrRestart from "@components/ResumeOrRestart/ResumeOrRestart";
import Steps from "@components/Steps/Steps";
import Timer from "@components/Timer/Timer";
import NotificationProvider from "@contexts/Notification/NotificationProvider";
import ThemeProvider from "@contexts/Theme/ThemeProvider";
import { Container } from "@mantine/core";
import { useFavicon } from "@mantine/hooks";

import favicon from "@assets/favicon.ico";
import DevNavbar from "@components/DevNavbar/DevNavbar";

function App() {
	useFavicon(favicon);
	return (
		<ThemeProvider>
			<NotificationProvider />
			<ResumeOrRestart>
				<DevNavbar />
				<Timer />
				<Container my="auto" py="xl" size="xs">
					<Steps />
				</Container>
			</ResumeOrRestart>
			<LegalCopyright />
		</ThemeProvider>
	);
}

export default App;
