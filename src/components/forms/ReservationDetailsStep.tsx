import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useFormContext } from '@/context/context';
import { BookTicketFormSchema } from '@/types';
import StepNavigation from './StepNavigation';
import FormField from './FormField';

const ReservationDetailsSchema = BookTicketFormSchema.pick({
    ticketType: true,
    ticketQuantity: true,
    additionalInfo: true
});

type ReservationDetails = z.infer<typeof ReservationDetailsSchema>;

const ReservationDetailsStep = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ReservationDetails>({
        resolver: zodResolver(ReservationDetailsSchema)
    });

    const { nextStep } = useFormContext();

    const onSubmit = (data: ReservationDetails) => {
        console.log(data);
        nextStep();
    };

    return (
        <div>
            <h2>Reservation Details Step</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormField type="text" register={register} name="ticketType" error={errors.ticketType} />
                <FormField type="text" register={register} name="ticketQuantity" error={errors.ticketQuantity} />
                <FormField type="text" register={register} name="additionalInfo" error={errors.additionalInfo} />
                <StepNavigation />
            </form>
        </div>
    );
};

export default ReservationDetailsStep;
