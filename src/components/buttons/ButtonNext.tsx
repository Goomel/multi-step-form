const ButtonNext = ({ onClick }: { onClick: () => void }) => {
	return <button type="button" className="bg-orange-500 text-gray-50 h-10 px-3 lg:px-4 rounded-md lg:rounded-lg font-medium cursor-pointer" onClick={onClick}>Next step</button>;
};

export default ButtonNext;