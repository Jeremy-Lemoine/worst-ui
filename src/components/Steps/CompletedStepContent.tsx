import socialLinks from "@components/Steps/socialLinks";
import { Flex, Image, Paper, Space, Text } from "@mantine/core";

export default function CompletedStepContent() {
	return (
		<Paper p="xl" shadow="lg" withBorder m="auto">
			<Text
				ta="center"
				fw={700}
				size="xl"
				c="var(--mantine-primary-color-5)"
			>
				Congrats!
			</Text>
			<Space h="xl" />
			<Text>
				You nailed it! Don't hesitate to share it with your friends
				&#128521;
			</Text>
			<Space h="xl" />
			<Flex gap="md" justify="center">
				{socialLinks.map((link, index) => (
					<a
						key={index}
						href={link.href}
						target="_blank"
						rel="noreferrer"
					>
						<Image src={link.src} alt={link.alt} h={40} w={40} />
					</a>
				))}
			</Flex>
		</Paper>
	);
}
