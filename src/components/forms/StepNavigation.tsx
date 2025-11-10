import ButtonPrev from '@/components/buttons/ButtonPrev.tsx';
import ButtonNext from '@/components/buttons/ButtonNext.tsx';
import { useFormContext } from '@/context/context';

const StepNavigation = () => {
    const { steps, currentStep, prevStep } = useFormContext();

    return (
        <div className={`flex gap-4 items-center ${currentStep === 0 ? 'justify-end' : 'justify-between'}`}>
            {currentStep > 0 && <ButtonPrev onClick={prevStep} />}
            <ButtonNext stepsAmount={steps.length} currentStep={currentStep} />
        </div>
    );
};

export default StepNavigation;
