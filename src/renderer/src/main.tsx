import "./assets/styles.css";

import { StrictMode } from "react";
import { createHashHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { createRoot } from "react-dom/client";

import { queryClient, QueryClientProvider } from "./components/providers/query-client";
import { routeTree } from "./routeTree.gen";

const hashHistory = createHashHistory();

const router = createRouter({
	routeTree,
	history: hashHistory,
	defaultPreload: "intent",
	context: { queryClient },
	Wrap: QueryClientProvider,
});

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Root element not found");
}

createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}
