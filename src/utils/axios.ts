import axios from "axios";

export const instance = axios.create({
	baseURL: "//metrika.ferma-site.ru",
});
