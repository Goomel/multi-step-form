import { z } from "zod";
import type { FieldError, UseFormRegister } from "react-hook-form";

export const MultiStepFormSchema = z.object({
	firstName: z
		.string()
		.min(3, "First name must be at least 3 characters long")
		.max(20, "First name must be at most 20 characters long"),
	lastName: z
		.string()
		.min(3, "Last name must be at least 3 characters long")
		.max(20, "Last name must be at most 20 characters long"),
});

export type FormData = z.infer<typeof MultiStepFormSchema>;

export type NameFields = "firstName" | "lastName";

export type FormFieldProps = {
	type: string;
	placeholder?: string;
	name: NameFields;
	register: UseFormRegister<FormData>;
	label?: string;
	error?: FieldError;
};
