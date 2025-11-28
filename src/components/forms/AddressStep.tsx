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
    const { nextStep, formData } = useFormContext();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Address>({
        resolver: zodResolver(AddressSchema),
        defaultValues: formData.formData
    });

    const onSubmit = (data: Address) => {
        nextStep(data);
    };
    return (
        <div>
            <p className="text-neutral-400 text-sm mb-1">Step 2/3</p>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">Enter your address details</h2>
            <span className="block w-full h-px bg-neutral-700 my-6"></span>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                <FormField
                    type="text"
                    name="street"
                    label="Street"
                    register={register}
                    error={errors.street}
                    placeholder="123 Main St"
                />
                <FormField
                    type="text"
                    name="city"
                    label="City"
                    register={register}
                    error={errors.city}
                    placeholder="New York"
                />
                <FormField
                    type="text"
                    name="zipCode"
                    label="Zip code"
                    register={register}
                    error={errors.zipCode}
                    placeholder="10001"
                />
                <StepNavigation />
            </form>
        </div>
    );
};

export default AddressStep;
