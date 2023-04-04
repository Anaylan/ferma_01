import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const customVariant = defineStyle((props) => {
	const { colorScheme: c } = props;
	return {
		background: "#FFFFFF",
		_hover: {
			background: "#E7CE1C !important",
		},
	};
});

export const Button = defineStyleConfig({
	baseStyle: {
		borderRadius: "xl",
	},
	variants: {
		custom: customVariant,
	},
});
