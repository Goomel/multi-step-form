const ButtonPrev = ({ onClick }: { onClick: () => void }) => {
    return (
        <button
            type="button"
            className="h-10 px-3 lg:px-4 rounded-md lg:rounded-lg font-semibold bg-[var(--color-dark-bg-contrast)] text-gray-100 cursor-pointer"
            onClick={onClick}
        >
            Back
        </button>
    );
};

export default ButtonPrev;
