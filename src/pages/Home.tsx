import { FC, Fragment } from "react";

import {
	Box,
	Button,
	Container,
	FormControl,
	Heading,
	Input,
	VStack,
	Text,
	useToast,
} from "@chakra-ui/react";

import { useFormik } from "formik";
import { phoneMask } from "@/lib/masks";
import MaskedInput from "react-text-mask";
import { mainPageValidationSchema } from "@/lib/validSchemas";
import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import { TooltipError } from "@/components/Tooltip";

import { instance } from "@/utils/axios";

const Home: FC = () => {
	const toast = useToast();

	const formik = useFormik({
		initialValues: {
			who: "",
			phone: "",
		},
		validationSchema: mainPageValidationSchema,
		onSubmit: (values) => {
			// console.log(values);

			instance
				.get(`/index.php?module=API&method=Leads.addReport&format=json`, {
					params: { ...values },
				})
				.then(({ data }) => {
					console.log(data);
					toast({
						position: "bottom",
						status: "success",
						isClosable: true,
						title: "Заявка успешно отправлена",
						description: "Заявка успешно отправлена, Ожидайте звонка",
					});
					formik.resetForm();
				})
				.catch((er: string) => {
					console.error(er);
					toast({
						position: "bottom",
						status: "error",
						isClosable: true,
						title: "Возникла ошибка",
						description: "Что-то пошло не так, попробуйте позже",
					});
				});
		},
	});
	document.title = "Приведем заявки для автосервиса из Яндекс Директ";
	return (
		<Fragment>
			<Header />
			<Container
				as={"section"}
				marginTop={{ base: "10", lg: "14" }}
				color={"white"}>
				<Box maxW={{ lg: "max-content", base: "100%" }}>
					<Heading
						lineHeight={"100%"}
						as='h1'
						fontSize={{
							base: "36px",
							sm: "48px",
							md: "44px",
							xl: "54px",
							"2xl": "80px",
						}}>
						Приведем заявки
						<br />
						для автосервиса
						<br />
						из Яндекс Директ!
					</Heading>

					<form onSubmit={formik.handleSubmit}>
						<VStack alignItems={"flex-start"} marginTop={"8"}>
							<Heading
								textAlign={"left"}
								lineHeight='100%'
								fontSize={{
									base: "18px",
									sm: "24px",
									xl: "30px",
									"2xl": "40px",
								}}>
								Получите медиаплан
								<br />
								для продвижения автобизнеса
							</Heading>

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
											color='#ffff'
											borderColor={
												formik.errors.who ? "red !important" : undefined
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
												formik.errors.phone ? "red !important" : undefined
											}
											value={formik.values.phone}
											onChange={formik.handleChange}
										/>
									</Box>
								</TooltipError>

								<Button
									type='submit'
									variant={"custom"}
									size={{ sm: "lg", base: "md" }}
									color={"#001549"}>
									Получить
								</Button>
								<Text
									fontSize={{ "2xl": "15px", base: "12px" }}
									zIndex={"modal"}
									opacity='0.8'>
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
						</VStack>
					</form>
				</Box>
			</Container>
			<Box
				as='footer'
				flex={"1"}
				display='flex'
				marginTop={{ base: "-15%", lg: "0" }}
				_after={{
					backgroundImage: "/car.webp",
					backgroundRepeat: "no-repeat",
					backgroundSize: "100%",
					backgroundPosition: "bottom right",
					position: { base: "relative", lg: "absolute" },
					display: "block",
					content: '""',
					marginLeft: "auto",
					marginTop: { base: "auto", md: "0", lg: "0" },
					marginBottom: { base: 0, lg: "-7%", "2xl": 0 },
					width: {
						base: "100%",
						md: "100%",
						lg: "65%",
						xl: "55%",
						"2xl": "50%",
					},
					aspectRatio: "1",
					bottom: "0",
					right: { base: "-20%", xl: "0" },
				}}
			/>
		</Fragment>
	);
};

export default Home;
