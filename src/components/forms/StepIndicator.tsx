import { useFormContext } from '@/context/context';

const StepIndicator = () => {
    const { currentStep, steps } = useFormContext();

    return (
        <div>
            <p>StepIndicator</p>
            <p>
                {currentStep + 1} of {steps.length}
            </p>
        </div>
    );
};

export default StepIndicator;
