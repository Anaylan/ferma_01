import {
	Button,
	FormControl,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import { useFormik } from "formik";

import * as Yup from "yup";

const validationSchema = Yup.object({
	firstName: Yup.string()
		.max(15, "Have to be 15 characters or less")
		.required("Required"),
	lastName: Yup.string()
		.max(20, "Have to be 20 or less characters")
		.required("Required"),
	email: Yup.string().required("Required."),
	phoneNumber: Yup.string().required("Required"),
});

export const ModalPage = ({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) => {
	const formik = useFormik({
		initialValues: {
			whoModal: "",
			phoneModal: "",
		},
		// validationSchema,
		onSubmit: (values) => {
			console.log(values);
			alert(JSON.stringify(values, null, 2));

			onClose();
		},
	});
	return (
		<Modal
			isCentered={true}
			isOpen={isOpen}
			closeOnOverlayClick={true}
			onClose={onClose}>
			<ModalOverlay />
			<ModalContent borderRadius={"xl"}>
				<ModalHeader paddingBottom={"0"} fontSize={"lg"}>
					Оставьте свои данные и мы свяжемся с вами для бесплатной консультации
				</ModalHeader>
				{/* <ModalCloseButton /> */}
				<ModalBody>
					<form onSubmit={formik.handleSubmit}>
						<FormControl
							marginTop={"4"}
							gap={"1rem"}
							display={"flex"}
							flexDirection={"column"}>
							<Input
								name='whoModal'
								value={formik.values.whoModal}
								borderColor={"#000000"}
								onChange={formik.handleChange}
								// colorScheme={""}
								color='#000000'
								borderRadius={"xl"}
								placeholder='Представьтесь'
								type='text'
							/>
							<Input
								name='phoneModal'
								borderColor={"#000000"}
								value={formik.values.phoneModal}
								onChange={formik.handleChange}
								color='#000000'
								borderRadius={"xl"}
								placeholder='Номер вашего телефона'
								type='tel'
							/>
							<Button
								type='submit'
								background={"#001549"}
								colorScheme='blue'
								width={"100%"}
								fontWeight={700}
								fontSize={"20px"}
								lineHeight={"20px"}
								mr={3}>
								Заказать звонок
							</Button>
						</FormControl>
					</form>
				</ModalBody>

				<ModalFooter></ModalFooter>
			</ModalContent>
		</Modal>
	);
};
