import { useState } from 'react';
import { Navigate, Routes, Route, useNavigate } from 'react-router';
import { FormContext } from '@/context/context';
import type { FormData } from '@/types';
import PersonalDataStep from '@/components/forms/PersonalDataStep.tsx';
import AddressStep from '@/components/forms/AddressStep.tsx';
import ReservationDetailsStep from '@/components/forms/ReservationDetailsStep.tsx';
import StepLayout from '@/components/forms/StepLayout.tsx';

const STEPS = [
    {
        label: 'Personal Data',
        path: '/personal-data',
        component: <PersonalDataStep />
    },
    {
        label: 'Address',
        path: '/address',
        component: <AddressStep />
    },
    {
        label: 'Reservation Details',
        path: '/reservation-details',
        component: <ReservationDetailsStep />
    }
];

const Form = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        street: '',
        city: '',
        zipCode: '',
        ticketType: '',
        ticketQuantity: 0
    });

    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        if (currentStep < STEPS.length - 1) {
            const nextStep = currentStep + 1;
            setCurrentStep(nextStep);
            navigate(STEPS[nextStep].path);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            const prevStep = currentStep - 1;
            setCurrentStep(prevStep);
            navigate(STEPS[prevStep].path);
        }
    };

    const contextValue = {
        data: formData,
        setFormData,
        steps: STEPS,
        currentStep,
        setCurrentStep,
        nextStep,
        prevStep
    };

    return (
        <div className="container">
            <FormContext.Provider value={contextValue}>
                <StepLayout>
                    <Routes>
                        <Route index element={<Navigate to={STEPS[0].path} replace />} />
                        {STEPS.map((step) => (
                            <Route
                                key={step.path}
                                path={currentStep === 0 ? STEPS[0].path : step.path}
                                element={step.component}
                            />
                        ))}

                        {/* Default */}
                        <Route path="*" element={<Navigate to={STEPS[0].path} replace />} />
                    </Routes>
                </StepLayout>
            </FormContext.Provider>
        </div>
    );
};

export default Form;
