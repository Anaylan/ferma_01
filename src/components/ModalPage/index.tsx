import {
	Box,
	Flex,
	Heading,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Text,
	useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { RegisterContent } from "../Form/RegisterContent";

export const ModalPage = ({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) => {
	return (
		<Modal
			isCentered={true}
			isOpen={isOpen}
			closeOnOverlayClick={true}
			onClose={onClose}>
			<ModalOverlay />
			<ModalContent
				marginInline={"4"}
				borderRadius={"xl"}
				maxW='100%'
				width={{ md: "min", base: "100%" }}>
				<ModalCloseButton size={"md"} />
				<ModalHeader
					paddingBottom={"0"}
					paddingTop='10'
					fontSize={{ sm: "32px", base: "20px" }}
					lineHeight={"32px"}>
					Оставьте свои данные и мы свяжемся с вами для бесплатной консультации
				</ModalHeader>
				<Box minW={{ md: "max-content", base: "" }} paddingBottom='8'>
					<ModalBody>
						<RegisterContent
							// marginTop={"4"}
							inputBorderColor='black !important'
							btnText='Заказать звонок'
							button={{
								background: "#001549",
								colorScheme: "blue",
								_hover: {
									background: "#002685",
								},
							}}
						/>
						<Text
							width={"100%"}
							fontSize={{ md: "15px", base: "12px" }}
							opacity='0.6'
							color={"#001549"}
							marginTop={"4 !important"}>
							Нажимая кнопку «Получить», вы соглашаетесь «
							<Link
								style={{
									textDecoration: "underline",
								}}
								to='/privacy'>
								Политикой конфиденциальности
							</Link>
							»
						</Text>
					</ModalBody>
				</Box>
			</ModalContent>
		</Modal>
	);
};
