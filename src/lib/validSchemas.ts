import * as Yup from "yup";

export const mainPageValidationSchema = Yup.object().shape({
	who: Yup.string()
		.min(2, "Ваше имя слишком короткое")
		.required("Введите ваше имя!"),
	phone: Yup.string()
		.min(16, "Номер телефона слишком короткий")
		.max(16, "Номер телефона слишком длинный")
		.required("Введите номер телефона"),
});