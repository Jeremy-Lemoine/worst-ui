import { Container, Space, Title } from "@mantine/core";
import useGlobalTimer from "../../contexts/Timer/TimerStore";

function Timer() {
	const time = useGlobalTimer((state) => state.time);

	const displayedTime = new Date(time * 1000).toISOString().substring(14, 19);

	return (
		<Container fluid>
			<Space h="md" />
			<Title order={1}>{displayedTime}</Title>
		</Container>
	);
}

export default Timer;
