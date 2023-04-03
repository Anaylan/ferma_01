import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
// import logo from "";

export default function ErrorBoundary() {
	const navigate = useNavigate();
	let error = useRouteError();
	console.log(error);

	const toMainPage = () => {
		navigate("/", { replace: true });
	};

	if (isRouteErrorResponse(error) && error.status === 404) {
		// Uncaught ReferenceError: path is not defined
		document.title = "404 | Страница не найдена";
		return (
			<>
				<Flex flex={"1 1 auto"} alignItems={"center"} justifyContent='center'>
					<Box
						display={"flex"}
						flexDirection={"column"}
						alignItems='center'
						gap={"1.5rem"}>
						<Image
							onClick={toMainPage}
							width='200'
							height={"200"}
							src={"/island-beach-svgrepo-com.svg"}
							alt='Ferma | Страница не найдена'
						/>
						<Heading size={"3xl"} color={"white"}>
							{error.status}
						</Heading>
						<Text fontSize={"xl"} color={"white"}>
							Эй капитан, кажется, мы попали не на тот остров
						</Text>
						<Button onClick={toMainPage} size='lg'>
							Вернутся назад
						</Button>
					</Box>
				</Flex>
			</>
		);
	}

	// Uncaught ReferenceError: path is not defined
	document.title = "Что-то пошло не так";
	return (
		<>
			<Flex flex={"1 1 auto"} alignItems={"center"} justifyContent='center'>
				<Box
					display={"flex"}
					flexDirection={"column"}
					alignItems='center'
					gap={"1.5rem"}>
					<Image
						onClick={toMainPage}
						width='200'
						height={"200"}
						src={"/meteorite.svg"}
						alt='Ferma | Что-то пошло не так'
					/>
					<Heading color={"white"}>Что-то пошло не так</Heading>
					<Text fontSize={"xl"} color={"white"}>
						Подождите, пока мы решим эту проблему
					</Text>
					<Button onClick={toMainPage} size='lg'>
						Вернутся назад
					</Button>
				</Box>
			</Flex>
		</>
	);
}
