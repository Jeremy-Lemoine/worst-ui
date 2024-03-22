import stepDetails, {
	maxStepNumber,
	onCompleteReach,
} from "@contexts/Steps/stepDetails";
import { selectAttributes } from "@contexts/utils";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
	active: number;
	highestVisited: number;
	setActive: (step: number) => void;
	isMax: () => boolean;
	reset: () => void;
};

const useGlobalSteps = create<State>()(
	persist(
		(set, get) => ({
			active: -1,
			highestVisited: -1,
			setActive: (stepNumber: number) => {
				if (stepNumber > maxStepNumber || stepNumber < 0) return;
				if (get().highestVisited === maxStepNumber) return;
				if (stepNumber > get().highestVisited) {
					set({ active: stepNumber, highestVisited: stepNumber });
					if (stepNumber === maxStepNumber) {
						onCompleteReach();
					} else {
						stepDetails[stepNumber].onReach?.();
					}
				} else {
					set({ active: stepNumber });
				}
			},
			isMax: () => get().active === maxStepNumber,
			reset: () => set({ active: -1, highestVisited: -1 }),
		}),
		{
			name: "steps",
			partialize: selectAttributes(["active", "highestVisited"]),
		},
	),
);

export default useGlobalSteps;
