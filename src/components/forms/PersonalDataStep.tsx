import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { BookTicketFormSchema } from '@/types';
import { useFormContext } from '@/context/context';
import FormField from './FormField';
import StepNavigation from './StepNavigation';

const PersonalDataSchema = BookTicketFormSchema.pick({
    name: true,
    email: true
});

type PersonalData = z.infer<typeof PersonalDataSchema>;

const PersonalDataStep = () => {
    const { nextStep, formData } = useFormContext();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<PersonalData>({
        resolver: zodResolver(PersonalDataSchema),
        defaultValues: formData.formData
    });

    const onSubmit = (data: PersonalData) => {
        nextStep(data);
    };

    return (
        <div>
            <p className="text-neutral-400 text-sm mb-1">Step 1/3</p>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">Let's start with your personal data</h2>
            <span className="block w-full h-px bg-neutral-700 my-4 lg:my-6"></span>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                <FormField
                    type="text"
                    name="name"
                    label="Name"
                    register={register}
                    error={errors.name}
                    placeholder="John Doe"
                />
                <FormField
                    type="email"
                    name="email"
                    label="Email"
                    register={register}
                    error={errors.email}
                    placeholder="john@domain.com"
                />
                <StepNavigation />
            </form>
        </div>
    );
};

export default PersonalDataStep;
