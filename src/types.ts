import { z } from "zod";

export const multiStepFormSchema = z.object({
	firstName: z
		.string()
		.min(3, "First name must be at least 3 characters long")
		.max(20, "First name must be at most 20 characters long"),
	lastName: z
		.string()
		.min(3, "Last name must be at least 3 characters long")
		.max(20, "Last name must be at most 20 characters long"),
});

export type FormData = z.infer<typeof multiStepFormSchema>;
