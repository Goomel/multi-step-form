import StepIndicator from './StepIndicator';

type StepLayoutProps = {
    children: React.ReactNode;
};

const StepLayout = ({ children }: StepLayoutProps) => {
    return (
        <div className="border border-neutral-700 rounded-xl p-8 lg:p-10">
            <div className="border-b border-b-neutral-700 lg:pb-8 space-y-1.5">
                <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold">Book a ticket</h2>
                <p className="text-neutral-400 text-sm sm:text-base lg:text-lg">
                    Fill in the form below to book a ticket
                </p>
            </div>
            <div className="flex">
                <div className="pt-8">
                    <StepIndicator />
                </div>
                <div className="grow p-8">{children}</div>
            </div>
        </div>
    );
};

export default StepLayout;
