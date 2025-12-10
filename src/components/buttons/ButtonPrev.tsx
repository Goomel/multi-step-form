const ButtonPrev = ({ onClick }: { onClick: () => void }) => {
    return (
        <button
            type="button"
            className="text-sm lg:text-base h-10 px-3 lg:px-4 rounded-md lg:rounded-lg font-medium border border-dark-bg-contrast text-gray-100 cursor-pointer"
            onClick={onClick}
        >
            Back
        </button>
    );
};

export default ButtonPrev;
