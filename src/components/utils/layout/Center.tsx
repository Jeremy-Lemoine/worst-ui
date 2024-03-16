import React from "react";

function Center({ children }: { children: React.ReactNode }) {
	return (
		<div
			style={{ display: "flex", flex: 1, width: "100%", height: "100%" }}
		>
			<div style={{ margin: "auto" }}>{children}</div>
		</div>
	);
}

export default Center;
