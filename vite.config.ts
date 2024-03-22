import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "/worst-ui/",
	resolve: {
		alias: {
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@contexts": path.resolve(__dirname, "./src/contexts"),
			"@utils": path.resolve(__dirname, "./src/utils"),
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
