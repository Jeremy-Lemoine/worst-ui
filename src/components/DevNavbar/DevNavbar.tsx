import { devEnvironment } from "@contexts/Timer/dev";
import { Box, Button, Paper, Text } from "@mantine/core";
import restartEverything from "@utils/restartEverything";

function DevNavbar() {
	if (!devEnvironment) {
		return null;
	}

	return (
		<Paper
			shadow="lg"
			withBorder
			pos="absolute"
			top="10px"
			right="10px"
			ta="center"
		>
			<Text pt="xs">Dev Panel</Text>
			<Box p="xl">
				<Button
					color="blue"
					variant="filled"
					onClick={restartEverything}
				>
					Reset
				</Button>
			</Box>
		</Paper>
	);
}

export default DevNavbar;
