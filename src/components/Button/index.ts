import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
	baseStyle: {
		borderRadius: "xl", // <-- border radius is same for all variants and sizes
	},
});
