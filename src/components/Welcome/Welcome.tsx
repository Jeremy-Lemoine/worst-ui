import { nextStep } from "@contexts/Steps/stepDetails";
import useGlobalTimer from "@contexts/Timer/TimerStore";
import {
	Button,
	CloseButton,
	Group,
	Mark,
	Paper,
	Space,
	Text,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";

function Welcome() {
	const startTimer = useGlobalTimer((state) => state.start);
	const isTimerStarted = useGlobalTimer((state) => state.isStarted);

	const stayHere = () => {
		notifications.show({
			title: "Here you go then!",
			message:
				"You can stay here as long as you want, but you won't get a very good score...",
			color: "yellow.6",
		});
	};

	const badStartTimer = () => {
		if (!isTimerStarted()) {
			notifications.show({
				title: "Why would you do that?",
				message: "Ok... if you insist...",
				color: "red.7",
			});
			startTimer();
		} else {
			notifications.show({
				title: "Time is already going...",
				message: "Do you want to make it faster? You just gotta ask!",
				color: "violet.6",
			});
		}
	};

	return (
		<Paper p="xl" shadow="lg" withBorder pos="relative" m="auto">
			<CloseButton
				size="sm"
				variant="transparent"
				onClick={nextStep}
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
				Here we are gonna <Mark>take care of you</Mark>. You will have
				to go through multiple <Mark>steps</Mark>, and it will be harder
				and harder to guess what you are supposed to do. When you will
				reach next step, a <Mark>timer</Mark> will start. Good{" "}
				<Mark>luck</Mark> ;)
			</Text>
			<Space h="md" />
			<Group justify="flex-end">
				<Button variant="transparent" onClick={badStartTimer}>
					Start timer
				</Button>
				<Button variant="filled" onClick={stayHere}>
					Stay here
				</Button>
			</Group>
		</Paper>
	);
}

export default Welcome;
