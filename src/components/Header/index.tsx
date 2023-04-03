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

export const Header = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const navigate = useNavigate();

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
								06:00-15:00 Мск
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
