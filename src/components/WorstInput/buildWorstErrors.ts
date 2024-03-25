import { __InputStylesNames } from "@mantine/core";
import { FormErrors } from "@mantine/form";
import { CSSProperties } from "react";

type MantineInputStyles = Partial<Record<__InputStylesNames, CSSProperties>>;

const defautlStyles: MantineInputStyles = {
	input: { color: "gray" },
};

const errorStyles: MantineInputStyles = {
	input: { border: "1px solid green", ...defautlStyles?.input },
};

const validStyles: MantineInputStyles = {
	input: { border: "1px solid red", ...defautlStyles?.input },
};

export default function buildWorstErrors(
	formErrors: FormErrors,
	name: string,
): [string[], MantineInputStyles] {
	const errors = formErrors[name as string];
	if (typeof errors === "string" && errors.length > 0) {
		return [[errors], errorStyles];
	} else if (Array.isArray(errors) && errors.length > 0) {
		return [errors as string[], errorStyles];
	} else {
		return [[], validStyles];
	}
}
