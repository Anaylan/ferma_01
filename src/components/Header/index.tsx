import {
	Container,
	HStack,
	Flex,
	Heading,
	Button,
	Image,
	Text,
	Box,
	useDisclosure,
} from "@chakra-ui/react";
import logo from "@/assets/svg/logo.svg";

import { ModalPage } from "../ModalPage";
import { useNavigate } from "react-router";

var start = new Date("August 19, 2023 03:00:00 UTC");
var end = new Date("August 19, 2023 12:00:00 UTC");

export const Header = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const navigate = useNavigate();

	const normalizeDate = (value: number) => {
		if (value < 10) {
			return "0" + value;
		}
		return value;
	};

	return (
		<>
			<Container
				zIndex={"overlay"}
				paddingBottom='8'
				paddingTop={"8"}
				as={"header"}>
				<HStack
					justifyContent={"space-between"}
					as={"nav"}
					gap={{ base: "10px", md: 0 }}>
					<Box>
						<Image
							onClick={() => {
								navigate("/");
							}}
							cursor='pointer'
							width={{ lg: "240px", base: "140px" }}
							src={logo}
						/>
					</Box>

					<Flex gap={{ base: "0", md: "2.5rem" }} align={"center"}>
						<Flex gap={"16px"} align={"center"}>
							<Heading
								fontSize={"24px"}
								as='a'
								href='tel:+7 (3812) 308-136'
								fontWeight={"normal"}
								color={"white"}
								display={{ lg: "block", base: "none" }}>
								+7 (3812) <strong>308-136</strong>
							</Heading>
							<Text
								color={"white"}
								fontSize={{ base: "12px" }}
								lineHeight={"12px"}
								display={{ lg: "block", base: "none" }}>
								ПН-ПТ
								<br />
								{normalizeDate(start.getHours())}:
								{normalizeDate(start.getMinutes())}-
								{normalizeDate(end.getHours())}:
								{normalizeDate(end.getMinutes())}
							</Text>
						</Flex>
						<Button
							onClick={onOpen}
							fontWeight={"bold"}
							variant={"custom"}
							size={{ sm: "lg", base: "md" }}>
							Позвоним бесплатно
						</Button>
						<ModalPage onClose={onClose} isOpen={isOpen} />
					</Flex>
				</HStack>
			</Container>
		</>
	);
};
