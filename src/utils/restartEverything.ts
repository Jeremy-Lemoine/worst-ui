import useGlobalSteps from "@contexts/Steps/StepsStore";
import useGlobalTimer from "@contexts/Timer/TimerStore";

const resetTimer = useGlobalTimer.getState().reset;
const resetSteps = useGlobalSteps.getState().reset;

export default function restartEverything() {
	resetSteps();
	resetTimer();
}
