import { BiMailSend } from 'react-icons/bi';


const SummaryStep = () => {
    return(
        <div className="flex flex-col justify-center items-center text-center">
            <BiMailSend className="size-8 lg:size-12 text-orange-500 mb-3 lg:mb-5" />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 lg:mb-4">The form has been sent</h2>
            <p className="text-neutral-400 text-sm sm:text-base lg:text-lg">We will contact you soon...</p>
        </div>
    )
};

export default SummaryStep;
