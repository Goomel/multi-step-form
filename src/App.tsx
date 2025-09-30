import Form from "./components/Form.tsx";
import { useState } from "react";
import type { FormData } from "./types";

function App() {
	const [submittedData, setSubmittedData] = useState<FormData | null>(null);

	return (
		<div className="bg-neutral-800">
			<div className="flex flex-col gap-2 lg:gap-3 justify-center items-center min-h-screen">
				<Form handleSubmitData={setSubmittedData} />

				{submittedData?.firstName && submittedData?.lastName && (
					<div>
						<p>Submitted Data</p>
						<p>First name: {submittedData.firstName}</p>
						<p>Last name: {submittedData.lastName}</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
