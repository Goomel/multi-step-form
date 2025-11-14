import { z } from 'zod';
import type { FieldError, UseFormRegister } from 'react-hook-form';

export const BookTicketFormSchema = z.object({
    name: z
        .string()
        .min(3, 'Name must be at least 3 characters long')
        .max(20, 'Name must be at most 20 characters long'),
    email: z.email('Please enter a valid email'),
    street: z.string().min(1, 'Street is required'),
    city: z.string().min(1, 'City is required'),
    zipCode: z.string().min(1, 'Zip code is required'),
    ticketType: z.string().min(1, 'Ticket type is required'),
    ticketQuantity: z.number().min(1, 'Ticket quantity must be at least 1')
});

export type FormData = z.infer<typeof BookTicketFormSchema>;

type NameFields = 'name' | 'email' | 'street' | 'city' | 'zipCode' | 'ticketType' | 'ticketQuantity';

export type FormFieldProps = {
    type: string;
    placeholder?: string;
    name: NameFields;
    register: UseFormRegister<any>;
    label?: string;
    error?: FieldError;
};

export type FormContextType = {
    data: FormData;
    setFormData: (data: FormData) => void;
    steps: { label: string; path: string; component: React.ReactNode; icon: React.ReactNode }[];
    currentStep: number;
    setCurrentStep: (step: number) => void;
    nextStep: () => void;
    prevStep: () => void;
};
