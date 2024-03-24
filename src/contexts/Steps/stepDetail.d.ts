type StepDetail = {
	label: string;
	description: string;
	Component: () => JSX.Element;
	onReach?: () => void;
};

export default StepDetail;
