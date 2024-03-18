import { Paper, Stepper, StepperCompleted, Text } from "@mantine/core";
import useGlobalSteps from "../../contexts/Steps/StepsStore";
import Welcome from "../Welcome/Welcome";
import stepDetails from "../../contexts/Steps/stepDetails";

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

function CompletedStepContent() {
	return (
		<Paper p="xl" shadow="lg" withBorder m="auto">
			<Text
				ta="center"
				fw={700}
				size="lg"
				c="var(--mantine-primary-color-5)"
			>
				Congrats!
			</Text>
			<Text>You nailed it!</Text>
		</Paper>
	);
}

export default Steps;
