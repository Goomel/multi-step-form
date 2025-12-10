const ButtonNext = ({ stepsAmount, currentStep }: { stepsAmount: number; currentStep: number }) => {
    return (
        <button
            type="submit"
            className="text-sm lg:text-base bg-orange-500 text-gray-50 h-10 px-3 lg:px-4 rounded-md lg:rounded-lg font-medium cursor-pointer"
        >
            {currentStep + 1 === stepsAmount - 1 ? 'Submit' : 'Next step'}
        </button>
    );
};

export default ButtonNext;
