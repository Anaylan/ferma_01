import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
	// define the part you're going to style
	field: {
		borderRadius: "xl !important",
		size: { sm: "lg", base: "md" },
	},
	addon: {
		borderRadius: "xl !important",
		size: { sm: "lg", base: "md" },
	},
	element: {
		borderRadius: "xl !important",
		size: { sm: "lg", base: "md" },
	},
});

export const Input = defineMultiStyleConfig({ baseStyle });
