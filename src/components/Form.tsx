import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";
import type { FormData } from "../types";
import { MultiStepFormSchema } from "../types";
import FormField from "./FormField";

function Form({
	handleSubmitData,
}: {
	handleSubmitData: (data: FormData) => void;
}) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(MultiStepFormSchema),
	});

	const onSubmit: SubmitHandler<FormData> = (data) => {
		handleSubmitData(data);
		reset();
	};

	return (
		<form
			className="grid grid-cols-1 gap-2 lg:gap-3 w-lg mx-auto bg-neutral-600 p-4 rounded"
			onSubmit={handleSubmit(onSubmit)}
		>
			<FormField
				type="text"
				label="First name"
				name="firstName"
				register={register}
				error={errors.firstName}
			/>
			<FormField
				type="text"
				label="Last name"
				name="lastName"
				register={register}
				error={errors.lastName}
			/>
			<button
				type="submit"
				className="px-6 py-2.5 bg-blue-500 text-white rounded cursor-pointer"
			>
				Submit
			</button>
		</form>
	);
}

export default Form;
