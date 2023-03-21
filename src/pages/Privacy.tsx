import { FC, Fragment } from "react";

import {
	Box,
	Container,
	Heading,
	List,
	ListItem,
	OrderedList,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import { Header } from "@/components/Header";

const Privacy: FC = () => {
	document.title = "Политика конфиденциальности | Ferma";
	return (
		<Fragment>
			<Header />
			<Box flex={"1 1 auto"} backgroundColor='white'>
				<Container
					as={"section"}
					paddingTop='2rem'
					maxW={"8xl"}
					maxH='full'
					color={"black !important"}>
					<Heading
						fontSize={{
							base: "21px",
							sm: "28px",
							lg: "32px",
							xl: "40px",
						}}
						whiteSpace='nowrap'
						lineHeight={"120%"}
						mb={"1.77rem"}>
						Политика конфиденциальности
					</Heading>
					<Box fontSize={{ xl: "1rem", base: "1.1rem" }}>
						<strong>1. Общие положения</strong>
						<OrderedList marginY={"2"} ml='7'>
							<ListItem>
								1.1. Настоящая Политика конфиденциальности определяет общие
								условия сбора и обработки персональных данных пользователей
								сайта fermastudio.com, принадлежащего ООО «Ферма»
							</ListItem>
							<ListItem>(далее — ФЕРМА)</ListItem>
							<ListItem>
								1.2. ФЕРМА осуществляет обработку следующих персональных данных:
								<UnorderedList>
									<ListItem>полное имя;</ListItem>
									<ListItem>адрес электронной почты;</ListItem>
									<ListItem>номер мобильного телефона;</ListItem>
								</UnorderedList>
							</ListItem>
						</OrderedList>
						<Text lineHeight={"200%"}>
							2. Цели обработки персональных данных
						</Text>
						<OrderedList marginBottom={"2"} ml='7'>
							<ListItem>
								2.1. Оператор ФЕРМА обрабатывает персональные данные
								пользователей с целью:
								<UnorderedList>
									<ListItem>предоставления услуг;</ListItem>
								</UnorderedList>
							</ListItem>
						</OrderedList>
						<strong>3. Доступ третьих лиц к персональным данным</strong>
						<OrderedList marginY={"2"} ml='7'>
							<ListItem>
								3.1. Оператор ФЕРМА может передать персональные данные
								пользователя третьей стороне
							</ListItem>
							<ListItem>
								в следующих случаях:
								<UnorderedList>
									<ListItem>
										если передача персональных данных необходима для услуги;
									</ListItem>
									<ListItem>
										если пользователь дал согласие на осуществление передачи
										своих данных третьей стороне;
									</ListItem>
								</UnorderedList>
							</ListItem>
						</OrderedList>
						<strong>
							4. Обязанности оператора ФЕРМА по защите персональных данных
						</strong>
						<OrderedList marginY={"2"} ml='7'>
							<ListItem>
								4.1. Оператор ФЕРМА обязан принимать необходимые
								организационныеи технические меры для обеспечения
								конфиденциальности, целостностии доступности персональных данных
								пользователей.
							</ListItem>
							<ListItem>
								4.2. Оператор ФЕРМА обязан своевременно производить оценку
								соответствия требованиям законодательства РФ в области защиты
								информации.
							</ListItem>
						</OrderedList>
						<strong>5. Обратная связь</strong>
						<OrderedList ml='7' marginY={"2"}>
							<ListItem>
								5.1. Все предложения и вопросы по использованию сайта следует
								направлятьв службу поддержки
							</ListItem>
							<ListItem>
								по адресу электронной почты support@ferma.agency
							</ListItem>
						</OrderedList>
					</Box>
				</Container>
			</Box>
		</Fragment>
	);
};
export default Privacy;
