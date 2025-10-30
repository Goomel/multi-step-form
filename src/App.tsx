import { Navigate, Routes, Route } from "react-router";
// import { useState } from "react";
// import type { FormData } from "./types";
import PersonalDataStep from "@/components/forms/PersonalDataStep.tsx";
import AddressStep from "@/components/forms/AddressStep.tsx";
import ReservationDetailsStep from "@/components/forms/ReservationDetailsStep.tsx";
import StepLayout from "@/components/forms/StepLayout.tsx";

function App() {
	return (
			<StepLayout>
				<Routes>
						<Route index element={<Navigate to="/personal-data" replace/>} />
						<Route path="/personal-data" element={<PersonalDataStep />} />
						<Route path="/address" element={<AddressStep />} />
						<Route path="/reservation-details" element={<ReservationDetailsStep />} />

						{/* Default */}
						<Route path="*" element={<Navigate to="/personal-data" replace/>} />
				</Routes>
			</StepLayout>
	);
}

export default App;
