import { Stepper, StepperCompleted } from "@mantine/core";
import useGlobalSteps from "../../contexts/Steps/StepsStore";
import stepDetails from "../../contexts/Steps/stepDetails";
import Welcome from "../Welcome/Welcome";

import CompletedStepContent from "./CompletedStepContent";

function Steps() {
	const activeStep = useGlobalSteps((state) => state.active);
	const setActiveStep = useGlobalSteps((state) => state.setActive);
	const highestStepVisited = useGlobalSteps((state) => state.highestVisited);

	return highestStepVisited < 0 ? (
		<Welcome />
	) : (
		<Stepper size="sm" active={activeStep} onStepClick={setActiveStep}>
			{stepDetails.map((step, index) => (
				<Stepper.Step
					key={index}
					label={step.label}
					description={step.description}
					allowStepSelect={highestStepVisited >= index}
				>
					<step.Component />
				</Stepper.Step>
			))}
			<StepperCompleted>
				<CompletedStepContent />
			</StepperCompleted>
		</Stepper>
	);
}

export default Steps;
