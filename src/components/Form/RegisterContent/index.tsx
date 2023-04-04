import { TooltipError } from "@/components/Tooltip";
import { phoneMask } from "@/lib/masks";
import { mainPageValidationSchema } from "@/lib/validSchemas";
import { instance } from "@/utils/axios";
import {
	QueryContextModal,
	QueryContextModalProps,
	StatusEnum,
} from "@/utils/context/QueryContext";
import { FormControl, Input, Button, Box, ButtonProps } from "@chakra-ui/react";
import { useFormik } from "formik";
import { FC, useContext, useRef } from "react";
import MaskedInput from "react-text-mask";

export type RegisterContentProps = {
	inputBorderColor: string;
	btnText: string;
	button: ButtonProps;
};

export const RegisterContent: FC<RegisterContentProps> = ({
	inputBorderColor,
	btnText,
	button,
}) => {
	const { onOpen } = useContext(QueryContextModal) as QueryContextModalProps;

	const btnRef = useRef<HTMLButtonElement | null>(null);

	const formik = useFormik({
		initialValues: {
			who: "",
			phone: "",
		},
		validationSchema: mainPageValidationSchema,
		onSubmit: (values) => {
			console.log(formik);
			btnRef.current?.setAttribute("disabled", "true");

			// Все запросы запихивать перед этим, или перетаскивать секцию
			/**
			 * .finally(() => {
					btnRef.current?.removeAttribute("disabled");
				});
			 */
			instance
				.get(`/index.php?module=API&method=Leads.addReport&format=json`, {
					params: { ...values },
				})
				.then(({ data }) => {
					console.log(data);

					formik.resetForm();
					onOpen();
				})
				.catch((er: string) => {
					console.error(er);
					onOpen();
				})
				.finally(() => {
					btnRef.current?.removeAttribute("disabled");
				});
		},
	});

	return (
		<Box width={"100%"} mb={0}>
			<form onSubmit={formik.handleSubmit}>
				<FormControl gap={"1rem"} display={"flex"} flexDirection={"column"}>
					<TooltipError hasArrow label={formik.errors.who}>
						<Box>
							<Input
								name='who'
								size={{ sm: "lg", base: "md" }}
								value={formik.values.who}
								onChange={formik.handleChange}
								// color='#ffff'
								borderColor={
									formik.errors.who ? "red !important" : inputBorderColor
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
								guide={false}
								name='phone'
								size={{ sm: "lg", base: "md" }}
								placeholder='Номер вашего телефона'
								type='tel'
								borderColor={
									formik.errors.phone ? "red !important" : inputBorderColor
								}
								value={formik.values.phone}
								onChange={formik.handleChange}
							/>
						</Box>
					</TooltipError>
					<Button
						ref={btnRef}
						type='submit'
						size={{ sm: "lg", base: "md" }}
						{...button}>
						{btnText}
					</Button>
				</FormControl>
			</form>
		</Box>
	);
};
