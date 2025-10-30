type StepLayoutProps = {
    children: React.ReactNode;
}

const StepLayout = ({ children }: StepLayoutProps) => {
	return (
		<div>
			<div>
                Steps
            </div>
			<div>{children}</div>
		</div>
	);
};

export default StepLayout;
