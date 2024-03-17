import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
	time: number;
	interval: number | null;
	start: () => void;
	reset: () => void;
	isStarted: () => boolean;
};

const useGlobalTimer = create<State>()(
	persist(
		(set, get) => ({
			time: 0,
			interval: null,
			start: () => {
				if (get().interval) return;
				set({
					interval: setInterval(
						() => set((state) => ({ time: state.time + 1 })),
						1000,
					),
				});
			},
			stop: () => {
				const interval = get().interval;
				if (interval) {
					clearInterval(interval);
					set({ interval: null });
				}
			},
			reset: () => set({ time: 0, interval: null }),
			isStarted: () => get().interval !== null,
		}),
		{
			name: "timer",
			partialize: ({ time }) => ({ time }),
		},
	),
);

export default useGlobalTimer;
