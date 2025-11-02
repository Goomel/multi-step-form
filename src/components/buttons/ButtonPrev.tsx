const ButtonPrev = ({ onClick }: { onClick: () => void }) => {
	return <button type="button" className="h-10 px-2 lg:px-3 border border-gray-300 text-gray-600 rounded-md lg:rounded-lg font-medium cursor-pointer" onClick={onClick}>Back</button>;
};

export default ButtonPrev;