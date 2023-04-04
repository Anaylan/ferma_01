import {
	QueryContextModal,
	QueryContextModalProps,
} from "@/utils/context/QueryContext";
import {
	Box,
	Flex,
	Heading,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Image,
} from "@chakra-ui/react";
import { useContext } from "react";

export const SendData = () => {
	const { isOpen, onClose } = useContext(
		QueryContextModal
	) as QueryContextModalProps;
	return (
		<>
			<Modal
				isCentered={true}
				closeOnOverlayClick={true}
				isOpen={isOpen}
				onClose={onClose}>
				<ModalOverlay />
				<ModalContent
					marginInline={"4"}
					borderRadius={"xl"}
					maxW='100%'
					width={{ md: "min", base: "100%" }}>
					<ModalCloseButton />
					<ModalHeader
						paddingBottom={"0"}
						paddingTop='10'
						fontSize={{ sm: "32px", base: "20px" }}
						lineHeight={"32px"}></ModalHeader>
					<Box
						minW={{ md: "max-content", base: "" }}
						paddingX={"5"}
						paddingBottom='8'>
						<ModalBody>
							<Flex
								position={"relative"}
								alignItems={"flex-start"}
								justifyContent={"center"}>
								<Image src='/okay.svg' />
								<Box position={"absolute"}>
									<Image
										// mt={"-20"}
										ml={"200%"}
										width={"52px"}
										src='/smoothcorner.svg'
										alt='star'
									/>
									<Image
										// mt={"-20"}
										ml={"250%"}
										width={"27px"}
										src='/smoothcorner.svg'
										alt='star'
									/>
									<Image
										ml={"-190%"}
										mt={"4"}
										width={"27px"}
										src='/smoothcorner.svg'
										alt='star'
									/>
								</Box>
							</Flex>
							<Heading
								mt={"52px"}
								textAlign={"center"}
								fontWeight={700}
								fontSize={"32px"}
								lineHeight={"41px"}>
								Спасибо, что отправили заявку!
								<br />
								Мы с вами свяжемся в ближайшее время
							</Heading>
						</ModalBody>
					</Box>
				</ModalContent>
			</Modal>
		</>
	);
};
