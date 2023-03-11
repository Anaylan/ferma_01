import { defineStyleConfig } from "@chakra-ui/react";

export const Input = defineStyleConfig({
	// The styles all button have in common
	baseStyle: {
		field: {
			borderRadius: "xl", // <-- border radius is same for all variants and sizes
		},
		addon: {
			borderRadius: "xl",
		},
		element: {
			borderRadius: "xl",
		},
	},
	sizes: {
		base: {
			field: {
				borderRadius: "xl", // <-- border radius is same for all variants and sizes
			},
		},
	},
});
