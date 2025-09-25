import FormReactHookForm from "./components/Form.tsx";
import { useState } from "react";
import type { FormValues } from "./types";

function App() {
	const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

	return (
		<div className="bg-neutral-800">
			<div className="flex flex-col gap-2 lg:gap-3 justify-center items-center min-h-screen">
				<FormReactHookForm handleSubmitData={setSubmittedData} />

				{submittedData && (
					<div>
						<p>Submitted Data</p>
						<p>{submittedData.firstName}</p>
						<p>{submittedData.lastName}</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
