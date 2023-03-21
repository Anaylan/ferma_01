import { Tooltip, TooltipProps } from "@chakra-ui/react";
import { FC } from "react";

interface TooltipErrProps extends TooltipProps {
	props?: TooltipProps;
}

export const TooltipError: FC<TooltipErrProps> = ({ ...props }) => {
	return (
		<Tooltip
			{...props}
			bg='#D9D9D9'
			borderRadius={"lg"}
			padding='2'
			placement='bottom-start'
			color='#DA2121'>
			{props.children}
		</Tooltip>
	);
};
