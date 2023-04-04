import { Fragment } from "react";

import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router";
import { SendData } from "@/components/Form/SendData";

export const DefaultLayout = () => {
	return (
		<Fragment>
			<Box
				display={"flex"}
				flexDirection='column'
				as='main'
				id='content'
				position={"relative"}>
				<Outlet />
			</Box>
			<SendData />
		</Fragment>
	);
};
