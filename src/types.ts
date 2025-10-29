import { z } from "zod";
import type { FieldError, UseFormRegister } from "react-hook-form";

export const BookTicketFormSchema = z.object({
	firstName: z
		.string()
		.min(3, "First name must be at least 3 characters long")
		.max(20, "First name must be at most 20 characters long"),
	lastName: z
		.string()
		.min(3, "Last name must be at least 3 characters long")
		.max(20, "Last name must be at most 20 characters long"),
	email: z.email("Invalid email address"),
	phone: z.string().min(9, "Phone number must be at least 9 characters long"),
	address: z.string().min(1, "Address is required"),
	city: z.string().min(1, "City is required"),
	zipCode: z.string().min(1, "Zip code is required"),
	ticketType: z.string().min(1, "Ticket type is required"),
	ticketQuantity: z.number().min(1, "Ticket quantity must be at least 1"),
	additionalInfo: z.string().optional(),
});

export type FormData = z.infer<typeof BookTicketFormSchema>;

type NameFields = "firstName" | "lastName" | "email" | "phone" | "address" | "city" | "zipCode" | "ticketType" | "ticketQuantity" | "additionalInfo";

export type FormFieldProps = {
	type: string;
	placeholder?: string;
	name: NameFields;
	register: UseFormRegister<FormData>;
	label?: string;
	error?: FieldError;
};
