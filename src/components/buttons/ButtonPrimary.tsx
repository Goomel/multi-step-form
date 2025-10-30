const ButtonPrimary = ({
	type,
	children,
}: {
	type: "submit" | "reset" | "button";
	children: React.ReactNode;
}) => {
	return <button type={type}>{children}</button>;
};

export default ButtonPrimary;
