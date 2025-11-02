import ButtonPrev from "@/components/buttons/ButtonPrev.tsx"
import ButtonNext from "@/components/buttons/ButtonNext.tsx"
import { useFormContext } from "@/context/context";

const StepNavigation = () => {
	const { prevStep, nextStep } = useFormContext();
	return (
		<div className="flex gap-4 items-center">
			<ButtonPrev onClick={prevStep} />
			<ButtonNext onClick={nextStep} />
		</div>
	);
};

export default StepNavigation;