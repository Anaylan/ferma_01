import { FC, Fragment } from "react";

import {
	Box,
	Container,
	Heading,
	VStack,
	Text,
	useToast,
} from "@chakra-ui/react";

import { Header } from "@/components/Header";
import { Link } from "react-router-dom";

import { RegisterContent } from "@/components/Form/RegisterContent";

const Home: FC = () => {
	const toast = useToast();

	document.title = "Я.Директ для автосервисов";
	return (
		<Fragment>
			<Header />
			<Container
				as={"section"}
				marginTop={{ base: "10", lg: "14" }}
				flex={"1"}
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
						Приведём заявки
						<br />
						для автосервиса
						<br />
						из Яндекс Директ!
					</Heading>

					<VStack
						maxW={{ "2xl": "552px", xl: "476px", lg: "354px", base: "100%" }}
						alignItems={"flex-start"}
						spacing={"7"}
						marginTop={"8"}>
						<Heading
							textAlign={"left"}
							lineHeight='100%'
							fontSize={{
								base: "18px",
								sm: "22px",
								xl: "30px",
								"2xl": "36px",
							}}>
							Получите медиаплан
							<br />
							для продвижения автобизнеса
						</Heading>
						<RegisterContent
							inputBorderColor=''
							btnText='Получить'
							button={{ variant: "custom", color: "#001549" }}
						/>
						<Text
							fontSize={{ "2xl": "14px", base: "12px" }}
							zIndex={"modal"}
							marginTop={"2"}
							opacity='0.8'>
							Нажимая кнопку «Получить», вы соглашаетесь c «
							<Link
								style={{
									textDecoration: "underline",
								}}
								to='/privacy'>
								Политикой конфиденциальности
							</Link>
							»
						</Text>
					</VStack>
				</Box>
			</Container>
			<Box
				as='footer'
				// flex={"1"}
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
