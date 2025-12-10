import { BiBookmarks } from 'react-icons/bi';
import StepIndicator from './StepIndicator';

type StepLayoutProps = {
    children: React.ReactNode;
};

const StepLayout = ({ children }: StepLayoutProps) => {
    return (
        <div className="border border-neutral-700 rounded-xl bg-color-dark-bg">
            <div className="border-b border-b-neutral-700 lg:pb-8 space-y-1.5 p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-2">
                    <BiBookmarks className="size-8 lg:size-12 text-orange-500" />
                    <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold">Book a ticket</h2>
                </div>
                <p className="text-neutral-400 text-sm sm:text-base lg:text-lg">
                    Fill in the form below to book a ticket
                </p>
            </div>
            <div className="flex relative gap-14 px-6 sm:px-8 lg:px-14">
                <StepIndicator />
                <div className="grow my-8 lg:my-10">{children}</div>
            </div>
        </div>
    );
};

export default StepLayout;
