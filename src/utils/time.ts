export function timerDispslayedTime(time: number) {
	return new Date(time * 1000).toISOString().substring(14, 19);
}
