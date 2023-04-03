import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

import { Input } from "@/components/Input";

const theme = extendTheme({
	fonts: {
		heading: `'Muller'`,
		body: `'Muller'`,
		mono: `'Muller'`,
	},
	styles: {
		global: {
			"html, body": {
				minHeight: "100vh",
				minWidth: "100vw",
				maxWidth: "100vw",
				overflowX: "hidden",
			},
			body: {
				overflow: "hidden",
			},
			"#root": {
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				backgroundImage: "/bg.webp",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
			},
			"#content": {
				flex: "1 1 auto",
			},
		},
	},
	components: {
		Input,
		Button,
		Container,
	},
});

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<>
		<React.StrictMode>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</React.StrictMode>
	</>
);
