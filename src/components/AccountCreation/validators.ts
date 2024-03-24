export function validateEmail(value: string) {
	const errors = [];
	if (!value.includes("@")) {
		errors.push("Email should contain @ symbol.");
	}
	return errors.length > 0 ? errors : null;
}

export function validatePassword(value: string) {
	const errors = [];
	if (value.length < 8) {
		errors.push("Password should be at least 8 characters.");
	}
	return errors.length > 0 ? errors : null;
}
