import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { BookTicketFormSchema } from '@/types';
import { useFormContext } from '@/context/context';
import FormField from './FormField';
import StepNavigation from './StepNavigation';

const PersonalDataSchema = BookTicketFormSchema.pick({
    firstName: true,
    lastName: true,
    email: true,
    phone: true
});
``;
type PersonalData = z.infer<typeof PersonalDataSchema>;

const PersonalDataStep = () => {
    const { nextStep } = useFormContext();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<PersonalData>({
        resolver: zodResolver(PersonalDataSchema)
    });

    const onSubmit = (data: PersonalData) => {
        console.log(data);
        nextStep();
    };

    return (
        <div>
            <h2>Personal Data Step</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormField type="text" name="firstName" register={register} error={errors.firstName} />
                <FormField type="text" name="lastName" register={register} error={errors.lastName} />
                <FormField type="email" name="email" register={register} error={errors.email} />
                <FormField type="tel" name="phone" register={register} error={errors.phone} />
                <StepNavigation />
            </form>
        </div>
    );
};

export default PersonalDataStep;
