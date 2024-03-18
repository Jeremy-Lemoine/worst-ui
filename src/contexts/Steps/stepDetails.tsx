import { Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import useGlobalTimer from "../Timer/TimerStore";
import useGlobalSteps from "./StepsStore";

const startTimer = useGlobalTimer.getState().start;
const stopTimer = useGlobalTimer.getState().stop;

type StepDetail = {
	label: string;
	description: string;
	Component: () => JSX.Element;
	onReach?: () => void;
};

const stepDetails: StepDetail[] = [
	{
		label: "Account creation",
		description: "Credentials",
		Component: () => (
			<Button onClick={() => useGlobalSteps.getState().setActive(1)}>
				TODO
			</Button>
		),
		onReach: () => {
			startTimer();
			notifications.show({
				title: "Bravo!",
				message:
					"Now that you got it, let's see what score you will get!",
			});
		},
	},
];

export function onCompleteReach() {
	stopTimer();
}

export function getStepDetails(stepNumber: number) {
	return stepDetails[stepNumber - 1];
}

export const maxStepNumber = stepDetails.length;

export default stepDetails;
