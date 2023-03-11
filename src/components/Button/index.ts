import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
	// The styles all button have in common
	baseStyle: {
		borderRadius: "xl", // <-- border radius is same for all variants and sizes
	},
});
