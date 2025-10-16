import type { FormFieldProps } from "../types";

const FormField = ({
	type,
	placeholder,
	label,
	name,
	register,
	error,
}: FormFieldProps) => {
	return (
		<label htmlFor={name}>
			{label}
			<input
				type={type}
				placeholder={placeholder}
				className="border border-gray-300 bg-neutral-100 text-black rounded"
				{...register(name)}
			/>
			{error && <p className="text-red-400">{error.message}</p>}
		</label>
	);
};

export default FormField;
