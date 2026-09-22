import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "electron-vite";

export default defineConfig({
	main: {},
	preload: {},
	renderer: {
		resolve: {
			alias: {
				"@renderer": resolve("src/renderer/src"),
				"@": resolve("src/renderer/src"),
			},
		},
		plugins: [
			tanstackRouter({
				target: "react",
				autoCodeSplitting: true,
				routesDirectory: "./src/renderer/src/routes",
				generatedRouteTree: "./src/renderer/src/routeTree.gen.ts",
			}),
			react(),
			tailwindcss(),
		],
	},
});
