import type { FormFieldProps } from '@/types';

const FormField = ({ type, placeholder, label, name, register, error }: FormFieldProps) => {
    return (
        <label htmlFor={name} className="flex flex-col gap-2 text-xs lg:text-sm text-gray-200">
            {label}
            <input
                id={name}
                type={type}
                placeholder={placeholder}
                className="border border-neutral-500 placeholder:text-neutral-500 bg-transparent text-gray-100 rounded-xl p-3 focus:border-orange-400 focus:outline-none autofill:!bg-neutral-500 autofill:!shadow-[inset_0_0_0px_1000px_var(--color-dark-bg)] autofill:![-webkit-text-fill-color:#ffffff]"
                {...(type === 'number' ? register(name, { valueAsNumber: true }) : register(name))}
            />
            {error && <p className="text-xs mt-1 text-red-400">{error.message}</p>}
        </label>
    );
};

export default FormField;
