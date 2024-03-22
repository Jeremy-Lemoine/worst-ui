import useGlobalTimer from "@contexts/Timer/TimerStore";
import { Container, Space, Title } from "@mantine/core";
import { timerDispslayedTime } from "@utils/time";

function Timer() {
	const time = useGlobalTimer((state) => state.time);

	const displayedTime = timerDispslayedTime(time);

	return (
		<Container fluid>
			<Space h="md" />
			<Title order={1}>{displayedTime}</Title>
			<Space h="xl" />
		</Container>
	);
}

export default Timer;
