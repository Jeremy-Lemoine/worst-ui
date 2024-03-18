import { Notifications } from "@mantine/notifications";

function NotificationProvider() {
	return <Notifications position="bottom-center" zIndex={1000} limit={2} />;
}

export default NotificationProvider;
