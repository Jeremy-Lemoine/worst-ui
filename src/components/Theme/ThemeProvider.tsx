import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

function ThemeProvider({ children }: { children: React.ReactNode }) {
	return (
		<MantineProvider>
			<>
				<Notifications
					position="bottom-center"
					zIndex={1000}
					limit={2}
				/>
				{children}
			</>
		</MantineProvider>
	);
}

export default ThemeProvider;
