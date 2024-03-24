import AccountCreation from "@components/AccountCreation/AccountCreation";
import useGlobalSteps from "@contexts/Steps/StepsStore";
import StepDetail from "@contexts/Steps/stepDetail";
import useGlobalTimer from "@contexts/Timer/TimerStore";
import { notifications } from "@mantine/notifications";

const startTimer = useGlobalTimer.getState().start;
const stopTimer = useGlobalTimer.getState().stop;

const stepDetails: StepDetail[] = [
	{
		label: "Account creation",
		description: "Credentials",
		Component: AccountCreation,
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

export function nextStep() {
	const currentStep = useGlobalSteps.getState().active;
	if (currentStep < maxStepNumber) {
		useGlobalSteps.getState().setActive(currentStep + 1);
	}
}

export default stepDetails;
