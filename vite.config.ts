import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	server: {
		port: 3000,
		host: true,
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "src/renderer/src"),
		},
	},
	plugins: [react(), tailwindcss()],
});
