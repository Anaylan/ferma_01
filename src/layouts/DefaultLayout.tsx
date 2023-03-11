import { Fragment, ReactNode } from "react";
import logo from "@/assets/svg/logo.svg";
import {
	Button,
	Container,
	Flex,
	Image,
	HStack,
	Text,
	Heading,
	Box,
	useDisclosure,
} from "@chakra-ui/react";
import { ModalPage } from "@/components/ModalPage";

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Fragment>
			<Container maxW={"8xl"} as={"header"}>
				<HStack
					justifyContent={"space-between"}
					as={"nav"}
					gap={{ base: "10px", md: 0 }}
					paddingTop={"1rem"}>
					<Box as='a' href='#'>
						<Image src={logo} />
					</Box>

					<Flex gap={"16px"} align={"center"}>
						<Heading
							fontSize={"24px"}
							color={"white"}
							display={{ lg: "block", base: "none" }}>
							+7 (3812) 308-136
						</Heading>
						<Text color={"white"} display={{ lg: "block", base: "none" }}>
							Ответим на звонок <br /> ПН-ПТ 06:00-15:00 Мск
						</Text>
						<Button
							onClick={onOpen}
							flex={"none"}
							order={1}
							flexGrow={0}
							fontWeight={"bold"}>
							Позвоним бесплатно
						</Button>
						<ModalPage onClose={onClose} isOpen={isOpen} />
					</Flex>
				</HStack>
			</Container>
			<Box
				as='main'
				id='content'
				position={"relative"}
				_after={{
					backgroundImage: "/car.png",
					backgroundRepeat: "no-repeat",
					backgroundSize: "100%",
					backgroundPosition: "bottom right",
					position: { base: "relative", lg: "absolute" },
					display: "block",
					content: '""',
					marginLeft: "auto",
					marginRight: { base: "-20%", lg: "0" },
					marginTop: { base: "-15%", lg: "0" },
					width: {
						base: "100%",
						lg: "40%",
						xl: "50%",
					},
					aspectRatio: "1",
					bottom: "0",
					right: "0",
				}}>
				{children}
			</Box>
			<footer></footer>
		</Fragment>
	);
};
