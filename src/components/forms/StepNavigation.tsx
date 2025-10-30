import ButtonPrev from "@/components/buttons/ButtonPrev.tsx"
import ButtonNext from "@/components/buttons/ButtonNext.tsx"

const StepNavigation = () => {
	return (
		<div className="flex gap-4 items-center">
			<ButtonPrev />
			<ButtonNext />
		</div>
	);
};

export default StepNavigation;