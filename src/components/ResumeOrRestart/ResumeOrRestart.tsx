import {
	Button,
	Container,
	Group,
	Loader,
	Mark,
	Paper,
	Space,
	Text,
} from "@mantine/core";
import { useEffect, useState } from "react";
import useGlobalTimer from "../../contexts/TimerContext";

function ResumeOrRestart({ children }: { children: React.ReactNode }) {
	const resetTimer = useGlobalTimer((state) => state.reset);
	const startTimer = useGlobalTimer((state) => state.start);

	const time = useGlobalTimer((state) => state.time);
	const [isLoading, setisLoading] = useState(true);
	const [isChoiceNeeded, setIsChoiceNeeded] = useState(false);

	const displayedTime = new Date(time * 1000).toISOString().substring(14, 19);

	useEffect(() => {
		if (time > 0) {
			setisLoading(false);
			setIsChoiceNeeded(true);
		} else {
			setisLoading(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const restart = () => {
		setIsChoiceNeeded(false);
		resetTimer();
	};

	const resume = () => {
		setIsChoiceNeeded(false);
		startTimer();
	};

	return (
		<>
			{isLoading ? (
				<Container size="sm" m="auto">
					<Loader />
				</Container>
			) : !isChoiceNeeded ? (
				<>{children}</>
			) : (
				<Container size="sm" m="auto">
					<Paper
						p="xl"
						shadow="lg"
						withBorder
						pos="relative"
						m="auto"
					>
						<Text ta="center" fw={700} size="lg" c="orange.7">
							Resume or restart from scratch?
						</Text>
						<Space h="xl" />
						<Text>
							We notice you have a game in <Mark>progress</Mark>.
							Would you like to resume your game or start a new
							one?
						</Text>
						<Space h="sm" />
						<Text size="lg">
							Time spent
							<Text component="span" size="xl" ml="lg" fw={700}>
								{displayedTime}
							</Text>
						</Text>
						<Group justify="flex-end">
							<Button
								variant="transparent"
								onClick={restart}
								c="orange.7"
							>
								Restart
							</Button>
							<Button
								variant="filled"
								onClick={resume}
								bg="orange.7"
							>
								Resume
							</Button>
						</Group>
					</Paper>
				</Container>
			)}
		</>
	);
}

export default ResumeOrRestart;
