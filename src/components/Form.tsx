import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";
import type { FormData } from "../types";
import { multiStepFormSchema } from "../types";

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
		resolver: zodResolver(multiStepFormSchema),
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
			<label className="flex flex-col text-gray-100">
				First name
				<input
					type="text"
					{...register("firstName")}
					className="border border-gray-300 bg-neutral-100 text-black rounded"
				/>
			</label>
			{errors.firstName && (
				<p className="text-red-400">{errors.firstName.message}</p>
			)}
			<label className="flex flex-col text-gray-100">
				Second name
				<input
					type="text"
					{...register("lastName")}
					className="border border-gray-300 bg-neutral-100 text-black rounded"
				/>
			</label>
			{errors.lastName && (
				<p className="text-red-400">{errors.lastName.message}</p>
			)}

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
