import {
	validateConfirmPassword,
	validateEmail,
	validatePassword,
} from "@components/AccountCreation/validators";
import WorstInput from "@components/WorstInput/WorstInput";
import { nextStep } from "@contexts/Steps/stepDetails";
import {
	Button,
	Paper,
	PasswordInput,
	Space,
	Text,
	TextInput,
} from "@mantine/core";
import { createFormContext } from "@mantine/form";

type FormData = {
	email: string;
	password: string;
	confirmPassword: string;
};

const [FromProvider, useFormContext, useForm] = createFormContext<FormData>();

function AccountCreation() {
	const form = useForm({
		initialValues: {
			email: "Your email address",
			password: "p@ssw0rd",
			confirmPassword: "c0nf1rmP@ssw0rd",
		},
		validate: {
			email: validateEmail,
			password: validatePassword,
			confirmPassword: validateConfirmPassword,
		},
	});

	const onSubmit = () => {
		nextStep();
	};

	return (
		<Paper p="xl" shadow="lg" withBorder m="auto">
			<Text
				ta="center"
				fw={700}
				size="lg"
				c="var(--mantine-primary-color-5)"
			>
				Create your account
			</Text>
			<FromProvider form={form}>
				<form onSubmit={form.onSubmit(onSubmit)}>
					<Space h="md" />
					<WorstInput
						Component={TextInput}
						useFormContext={useFormContext}
						name="email"
						required
					/>
					<Space h="md" />
					<WorstInput
						Component={PasswordInput}
						useFormContext={useFormContext}
						name="password"
						required
					/>
					<Space h="md" />
					<WorstInput
						Component={PasswordInput}
						useFormContext={useFormContext}
						name="confirmPassword"
						required
					/>
					<Space h="xl" />
					<Button type="submit">Create account</Button>
				</form>
			</FromProvider>
		</Paper>
	);
}

export default AccountCreation;
