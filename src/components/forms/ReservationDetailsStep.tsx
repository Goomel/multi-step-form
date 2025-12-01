import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useFormContext } from '@/context/context';
import { BookTicketFormSchema } from '@/types';
import StepNavigation from './StepNavigation';
import FormField from './FormField';
import TicketTypeSelector from './TicketTypeSelector';

const ReservationDetailsSchema = BookTicketFormSchema.pick({
    ticketType: true,
    ticketQuantity: true
});

type ReservationDetails = z.infer<typeof ReservationDetailsSchema>;

const ReservationDetailsStep = () => {
    const { nextStep, formData } = useFormContext();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm<ReservationDetails>({
        resolver: zodResolver(ReservationDetailsSchema),
        defaultValues: formData.formData
    });

    const onSubmit = (data: ReservationDetails) => {
        nextStep(data);
    };

    return (
        <div>
            <p className="text-neutral-400 text-sm mb-1">Step 3/3</p>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">Reservation details</h2>
            <span className="block w-full h-px bg-neutral-700 my-6"></span>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                <TicketTypeSelector setValue={setValue} />
                <FormField
                    type="number"
                    register={register}
                    name="ticketQuantity"
                    label="Number of tickets"
                    placeholder="1"
                    error={errors.ticketQuantity}
                />
                <StepNavigation />
            </form>
        </div>
    );
};

export default ReservationDetailsStep;
