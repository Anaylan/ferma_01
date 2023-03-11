import { FC } from "react";

import {
	Box,
	Button,
	Container,
	FormControl,
	Heading,
	Input,
	VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";

export const Home: FC = () => {
	const formik = useFormik({
		initialValues: {
			who: "",
			phone: "",
		},
		onSubmit: (values) => {
			console.log(values);
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<Container
			maxW={"8xl"}
			marginTop={{ base: "16", lg: "40" }}
			color={"white"}>
			<Box maxW={{ md: "max-content", base: "100%" }}>
				<Heading
					lineHeight={"110%"}
					fontSize={{ base: "36px", sm: "48px", md: "80px" }}>
					Приведем заявки
					<br />
					для автосервиса
					<br />
					из Яндекс Директ!
				</Heading>

				<form onSubmit={formik.handleSubmit}>
					<VStack maxW={"85%"} alignItems={"flex-start"} marginTop={"8"}>
						<Heading
							textAlign={"left"}
							lineHeight={"40px"}
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
							<Input
								name='who'
								value={formik.values.who}
								onChange={formik.handleChange}
								// colorScheme={""}
								color='#ffff'
								borderRadius={"xl"}
								placeholder='Представьтесь'
								type='text'
							/>
							<Input
								name='phone'
								value={formik.values.phone}
								onChange={formik.handleChange}
								// colorScheme={""}
								color='#ffff'
								borderRadius={"xl"}
								placeholder='Номер вашего телефона'
								type='text'
							/>
							<Button type='submit' color={"#001549"}>
								Получить
							</Button>
						</FormControl>
					</VStack>
				</form>
			</Box>
		</Container>
	);
};
