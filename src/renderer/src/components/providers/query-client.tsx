import { QueryClientProvider as Provider, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 3,
			staleTime: 10 * 1000 * 60,
		},
	},
});

export function QueryClientProvider({ children }: React.PropsWithChildren) {
	return <Provider client={queryClient}>{children}</Provider>;
}
