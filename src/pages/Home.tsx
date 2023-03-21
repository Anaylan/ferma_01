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
	Spinner,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { phoneMask } from "@/lib/masks";
import MaskedInput from "react-text-mask";
import { mainPageValidationSchema } from "@/lib/validSchemas";
import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import { TooltipError } from "@/components/Tooltip";

const Home: FC = () => {
	const formik = useFormik({
		initialValues: {
			who: "",
			phone: "",
		},
		validationSchema: mainPageValidationSchema,
		onSubmit: (values) => {
			console.log(values);
			alert(JSON.stringify(values, null, 2));
		},
	});
	document.title = "Связаться с нами | Ferma";
	return (
		<Fragment>
			<Header />
			<Container
				as={"section"}
				maxW={"8xl"}
				marginTop={{ base: "10", lg: "4%" }}
				color={"white"}>
				<Box maxW={{ md: "max-content", base: "100%" }}>
					<Heading
						lineHeight={"110%"}
						as='h1'
						fontSize={{ base: "36px", sm: "48px", xl: "80px" }}>
						Приведем заявки
						<br />
						для автосервиса
						<br />
						из Яндекс Директ!
					</Heading>

					<form onSubmit={formik.handleSubmit}>
						<VStack
							maxW={{ xl: "85%", base: "100%" }}
							alignItems={"flex-start"}
							marginTop={"8"}>
							<Heading
								textAlign={"left"}
								fontSize={{ base: "18px", sm: "24px", md: "40px" }}>
								Получите медиаплан
								<br />
								для продвижения автобизнеса
							</Heading>

							<FormControl
								marginTop={"4"}
								gap={"1rem"}
								display={"flex"}
								flexDirection={"column"}>
								<TooltipError
									hasArrow
									label={formik.errors.who}
									isOpen={formik.errors.who != ""}>
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
								<TooltipError
									hasArrow
									label={formik.errors.phone}
									isOpen={formik.errors.phone != ""}>
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
								<Text fontSize={{ xl: "15px", base: "12px" }} opacity='0.8'>
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
					marginRight: { base: "0", md: "-20%", lg: "0" },
					marginTop: { base: "auto", lg: "0" },
					marginBottom: 0,
					width: {
						base: "100%",
						// md: "50%",
						lg: "55%",
						xl: "50%",
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
