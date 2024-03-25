export function validateEmail(email: string) {
	const errors = [];
	if (!email.includes("@")) {
		errors.push("Email should contain @ symbol.");
	}
	return errors.length > 0 ? errors : null;
}

export function validatePassword(password: string) {
	const errors = [];
	if (password.length < 8) {
		errors.push("Password should be at least 8 characters.");
	}
	return errors.length > 0 ? errors : null;
}

export function validateConfirmPassword(
	confirmation: string,
	{ password }: { password: string },
) {
	const errors = [];
	if (confirmation !== password) {
		errors.push("Passwords must not be different.");
	}
	return errors.length > 0 ? errors : null;
}
