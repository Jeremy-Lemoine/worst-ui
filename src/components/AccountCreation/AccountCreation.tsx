import {
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
};

const [FromProvider, useFormContext, useForm] = createFormContext<FormData>();

function AccountCreation() {
	const form = useForm({
		initialValues: {
			email: "",
			password: "",
		},
		validate: {
			email: validateEmail,
			password: validatePassword,
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
			<Space h="md" />
			<FromProvider form={form}>
				<form onSubmit={form.onSubmit(onSubmit)}>
					<WorstInput
						Component={TextInput}
						useFormContext={useFormContext}
						name="email"
						required
					/>
					<WorstInput
						Component={PasswordInput}
						useFormContext={useFormContext}
						name="password"
						required
					/>
					<Space h="md" />
					<Button type="submit">Create account</Button>
				</form>
			</FromProvider>
		</Paper>
	);
}

export default AccountCreation;
