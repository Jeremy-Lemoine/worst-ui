import useGlobalTimer from "../Timer/TimerStore";

const stopTimer = useGlobalTimer.getState().stop;

type StepDetail = {
	label: string;
	description: string;
	Component: () => JSX.Element;
	onReach?: () => void;
};

const stepDetails: StepDetail[] = [];

export function onCompleteReach() {
	stopTimer();
}

export function getStepDetails(stepNumber: number) {
	return stepDetails[stepNumber - 1];
}

export const maxStepNumber = stepDetails.length;

export default stepDetails;
