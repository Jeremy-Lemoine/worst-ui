import useGlobalSteps from "@contexts/Steps/StepsStore";
import useGlobalTimer from "@contexts/Timer/TimerStore";
import { devEnvironment } from "@contexts/Timer/dev";
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
import restartEverything from "@utils/restartEverything";
import { timerDispslayedTime } from "@utils/time";
import { useEffect, useRef, useState } from "react";

function ResumeOrRestart({ children }: { children: React.ReactNode }) {
	const startTimer = useGlobalTimer((state) => state.start);
	const isFinishedGame = useGlobalSteps((state) => state.isMax);

	const time = useRef(useGlobalTimer.getState().time);
	const step = useRef(useGlobalSteps.getState().active);
	const [isLoading, setisLoading] = useState(true);
	const [isChoiceNeeded, setIsChoiceNeeded] = useState(false);

	const displayedTime = timerDispslayedTime(time.current);

	useEffect(() => {
		if (time.current > 0 || step.current >= 0) {
			setisLoading(false);
			setIsChoiceNeeded(true);
		} else {
			setisLoading(false);
		}
	}, []);

	const restart = () => {
		restartEverything();
		setIsChoiceNeeded(false);
	};

	const resume = () => {
		setIsChoiceNeeded(false);
		if (!isFinishedGame()) {
			startTimer();
		}
	};

	return (
		<>
			{isLoading ? (
				<Container size="xs" my="auto">
					<Loader />
				</Container>
			) : !isChoiceNeeded || devEnvironment ? (
				<>{children}</>
			) : (
				<Container size="xs" my="auto">
					<Paper p="xl" shadow="lg" withBorder>
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
