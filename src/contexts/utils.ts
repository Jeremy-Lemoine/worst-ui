export function selectAttributes<T>(attrs: (keyof T)[]) {
	return (state: T) => {
		const selected = {} as Partial<T>;
		attrs.forEach((attr) => {
			selected[attr] = state[attr];
		});
		return selected;
	};
}
