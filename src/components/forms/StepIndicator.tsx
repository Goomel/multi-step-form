import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa6';
import { useFormContext } from '@/context/context';

const StepIndicator = () => {
    const { currentStep, steps } = useFormContext();

    return (
        <>
        <div className="relative hidden lg:block">
            <div className="flex gap-14">
                <div className="relative flex flex-col items-end gap-14 my-10 h-fit">
                    <div className="absolute w-px h-full right-6 translate-x-1/2 bg-dark-bg-contrast"></div>
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-center gap-3 z-1">
                            <div>
                                <p className="text-sm">{step.label}</p>
                            </div>
                            <div
                                className={`lg:size-12 bg-dark-bg-contrast rounded-full flex items-center justify-center ${
                                    index <= currentStep ? 'bg-orange-500' : ''
                                }`}
                            >
                                <div className="lg:[&>svg]:size-6">{index < currentStep ? <FaCheck /> : step.icon}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="relative flex flex-col justify-between items-center gap-14 my-[55px]">
                    <motion.div
                        className="absolute w-px h-[calc(100%-32px)] translate-x-1/2 bg-orange-500 z-1"
                        initial={{ height: 0 }}
                        animate={{
                            height: `${(100 / (steps.length - 1)) * currentStep}%`
                        }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    />
                    {steps.map((_, index) => (
                        <div key={index} className="flex items-center justify-center z-1">
                            <div
                                className={`size-4.5 rounded-full flex justify-center items-center bg-dark-bg border  ${index <= currentStep ? 'border-orange-400' : 'border-dark-bg-contrast'}`}
                            >
                                <span
                                    className={`block size-2.5 rounded-full ${index <= currentStep ? 'bg-orange-500' : 'bg-dark-bg-contrast'}`}
                                ></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute w-px h-full right-[9px] top-0 translate-x-1/2 bg-dark-bg-contrast"></div>
        </div>
        </>
    );
};

export default StepIndicator;
