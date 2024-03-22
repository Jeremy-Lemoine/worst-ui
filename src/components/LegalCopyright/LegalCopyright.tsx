import { Text } from "@mantine/core";

function LegalCopyright() {
	return (
		<Text
			pos="fixed"
			bottom={10}
			right={18}
			c="gray.5"
			style={{ userSelect: "none" }}
		>
			&copy; Jérémy Lemoine 2024
		</Text>
	);
}

export default LegalCopyright;
