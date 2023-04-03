import { phoneMask } from "@/lib/masks";
import { mainPageValidationSchema } from "@/lib/validSchemas";
import { instance } from "@/utils/axios";
import {
	Box,
	Button,
	FormControl,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Text,
	useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import MaskedInput from "react-text-mask";
import { TooltipError } from "../Tooltip";

export const ModalPage = ({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) => {
	const toast = useToast();

	const formik = useFormik({
		initialValues: {
			who: "",
			phone: "",
		},
		validationSchema: mainPageValidationSchema,
		onSubmit: (values) => {
			instance
				.get(`/index.php?module=API&method=Leads.addReport&format=json`, {
					params: { ...values },
				})
				.then(() => {
					toast({
						position: "bottom-left",
						status: "success",
						isClosable: true,
						title: "Заявка успешно отправлена",
						description: "Ожидайте звонка",
					});
					formik.resetForm();
					onClose();
				})
				.catch(() => {
					toast({
						position: "bottom-left",
						status: "error",
						isClosable: true,
						title: "Возникла ошибка",
						description: "Что-то пошло не так, попробуйте позже",
					});
				});
		},
	});
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
						<form onSubmit={formik.handleSubmit}>
							<FormControl
								marginTop={"4"}
								gap={"1rem"}
								display={"flex"}
								flexDirection={"column"}>
								<TooltipError hasArrow label={formik.errors.who}>
									<Box>
										<Input
											name='who'
											size={{ sm: "lg", base: "md" }}
											value={formik.values.who}
											onChange={formik.handleChange}
											borderColor={
												formik.errors.who
													? "red !important"
													: "black !important"
											}
											placeholder='Представьтесь'
											type='text'
										/>
									</Box>
								</TooltipError>

								<TooltipError hasArrow label={formik.errors.phone}>
									<Box>
										<Input
											as={MaskedInput}
											mask={phoneMask}
											name='phone'
											size={{ sm: "lg", base: "md" }}
											placeholder='Номер вашего телефона'
											type='tel'
											borderColor={
												formik.errors.phone
													? "red !important"
													: "black !important"
											}
											value={formik.values.phone}
											onChange={formik.handleChange}
										/>
									</Box>
								</TooltipError>

								<Button
									type='submit'
									background={"#001549"}
									colorScheme='blue'
									width={"100%"}
									size={{ sm: "lg", base: "md" }}
									fontWeight={700}
									fontSize={"20px"}
									lineHeight={"20px"}
									_hover={{
										background: "#002685",
									}}
									mr={3}>
									Заказать звонок
								</Button>
								<Text
									width={"100%"}
									fontSize={{ md: "15px", base: "12px" }}
									opacity='0.6'
									color={"#001549"}>
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
							</FormControl>
						</form>
					</ModalBody>
				</Box>
			</ModalContent>
		</Modal>
	);
};
