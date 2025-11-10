import type { FormFieldProps } from '@/types';

const FormField = ({ type, placeholder, label, name, register, error }: FormFieldProps) => {
    return (
        <label htmlFor={name} className="flex flex-col gap-1 text-xs lg:text-sm text-gray-200">
            {label}
            <input
                id={name}
                type={type}
                placeholder={placeholder}
                className="border border-neutral-500 bg-transparent text-gray-100 rounded-xl p-3 focus:border-orange-400 focus:outline-none"
                {...register(name)}
            />
            {error && <p className="text-xs mt-1 text-red-400">{error.message}</p>}
        </label>
    );
};

export default FormField;
