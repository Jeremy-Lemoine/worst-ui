import {
	Button,
	CloseButton,
	Container,
	Group,
	Mark,
	Paper,
	Space,
	Text,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";

function Welcome() {
	const next = () => {
		notifications.show({
			title: "Bravo!",
			message: "Now that you got it, let's see what score you will get!",
		});
	};

	return (
		<Container size="sm">
			<Paper p="xl" shadow="lg" withBorder pos="relative">
				<CloseButton
					size="sm"
					variant="transparent"
					onClick={next}
					pos="absolute"
					top="10px"
					right="10px"
					c="gray.5"
				/>
				<Text
					ta="center"
					fw={700}
					size="lg"
					c="var(--mantine-primary-color-5)"
				>
					Welcome to Worst UI
				</Text>
				<Space h="md" />
				<Text>
					Here we are gonna <Mark>take care of you</Mark>. You will
					have to go through multiple <Mark>steps</Mark>, and it will
					be harder and harder to guess what you are supposed to do.
					When you will start on next step, a <Mark>timer</Mark> will
					start. Good <Mark>luck</Mark> ;)
				</Text>
				<Space h="md" />
				<Group justify="flex-end">
					<Button variant="transparent">Start timer</Button>
					<Button variant="filled">Stay here</Button>
				</Group>
			</Paper>
		</Container>
	);
}

export default Welcome;
