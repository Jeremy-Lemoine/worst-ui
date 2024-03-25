import buildWorstErrors from "@components/WorstInput/buildWorstErrors";
import { Container, Text, TextInput } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { useMemo } from "react";
import _ from "lodash";

type WorstInputPropsType<T> = {
	useFormContext: () => UseFormReturnType<T, (values: T) => T>;
	name: keyof T;
	validator?: (value: T[keyof T]) => string | null | undefined;
	Component?: React.ComponentType;
	required?: boolean;
};

function WorstInput<T>({
	useFormContext,
	name,
	Component,
	required,
}: WorstInputPropsType<T>) {
	const form = useFormContext();

	const upperCaseName = useMemo(() => _.startCase(name as string), [name]);
	const InputComponent = useMemo(() => Component || TextInput, [Component]);

	const [errors, errorStyles] = buildWorstErrors(form.errors, name as string);

	return (
		<>
			<InputComponent
				{...form.getInputProps(name, { withError: false })}
				label={upperCaseName}
				withAsterisk={required}
				styles={errorStyles}
				autoComplete="new-password"
			/>
			{errors?.length > 0 && (
				<Container>
					<Text c="green" size="xs" span>
						{errors.map((error) => (
							<Text key={error} size="xs" component="li">
								{error}
							</Text>
						))}
					</Text>
				</Container>
			)}
		</>
	);
}

export default WorstInput;
