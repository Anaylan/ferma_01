import { createContext } from "react";

export enum StatusEnum {
	"success",
	"failed",
	"waiting",
}

export type QueryContextModalProps = {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
};

export const QueryContextModal = createContext<QueryContextModalProps | null>(
	null
);
