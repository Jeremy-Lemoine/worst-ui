import { MantineProvider } from "@mantine/core";

function ThemeProvider({ children }: { children: React.ReactNode }) {
	return (
		<MantineProvider>
			<>{children}</>
		</MantineProvider>
	);
}

export default ThemeProvider;
