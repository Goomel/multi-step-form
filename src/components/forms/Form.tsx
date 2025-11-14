import { useState } from 'react';
import { Navigate, Routes, Route, useNavigate } from 'react-router';
import { FormContext } from '@/context/context';
import type { FormData } from '@/types';
import PersonalDataStep from '@/components/forms/PersonalDataStep.tsx';
import AddressStep from '@/components/forms/AddressStep.tsx';
import ReservationDetailsStep from '@/components/forms/ReservationDetailsStep.tsx';
import SummaryStep from '@/components/forms/SummaryStep.tsx';
import StepLayout from '@/components/forms/StepLayout.tsx';
import { FaUser, FaHouse, FaBook, FaEnvelope } from 'react-icons/fa6';

const STEPS = [
    {
        label: 'Personal Data',
        path: '/personal-data',
        component: <PersonalDataStep />,
        icon: <FaUser />
    },
    {
        label: 'Address',
        path: '/address',
        component: <AddressStep />,
        icon: <FaHouse />
    },
    {
        label: 'Reservation Details',
        path: '/reservation-details',
        component: <ReservationDetailsStep />,
        icon: <FaBook />
    },
    {
        label: 'Summary',
        path: '/summary',
        component: <SummaryStep />,
        icon: <FaEnvelope />
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
            <div className="max-w-screen-lg mx-auto">
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
        </div>
    );
};

export default Form;
