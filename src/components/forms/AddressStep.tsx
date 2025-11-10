import { useFormContext } from '@/context/context';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { BookTicketFormSchema } from '@/types';
import FormField from './FormField';
import StepNavigation from './StepNavigation';

const AddressSchema = BookTicketFormSchema.pick({
    street: true,
    city: true,
    zipCode: true
});
type Address = z.infer<typeof AddressSchema>;

const AddressStep = () => {
    const { nextStep } = useFormContext();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Address>({
        resolver: zodResolver(AddressSchema)
    });

    const onSubmit = (data: Address) => {
        console.log(data);
        nextStep();
    };
    return (
        <div>
            <h2>Address Step</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormField type="text" name="street" label="Street" register={register} error={errors.street} />
                <FormField type="text" name="city" label="City" register={register} error={errors.city} />
                <FormField type="text" name="zipCode" label="Zip code" register={register} error={errors.zipCode} />
                <StepNavigation />
            </form>
        </div>
    );
};

export default AddressStep;
