import { Navigate, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { FormContext } from '@/context/context';
import { useLocalStorage } from '@/hooks/useLocalStorage';
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
        path: 'personal-data',
        component: <PersonalDataStep />,
        icon: <FaUser />
    },
    {
        label: 'Address',
        path: 'address',
        component: <AddressStep />,
        icon: <FaHouse />
    },
    {
        label: 'Reservation Details',
        path: 'reservation-details',
        component: <ReservationDetailsStep />,
        icon: <FaBook />
    },
    {
        label: 'Summary',
        path: 'summary',
        component: <SummaryStep />,
        icon: <FaEnvelope />
    }
];

const defaultFormData = {
    name: '',
    email: '',
    street: '',
    city: '',
    zipCode: '',
    ticketType: '',
    ticketQuantity: 1
};

const Form = () => {
    const navigate = useNavigate();
    const [formData, setFormData, clear] = useLocalStorage<{ step: number; formData: FormData }>({
        key: 'ticket-form-state',
        initialValue: { step: 0, formData: defaultFormData }
    });

    const currentStep = formData.step;

    const nextStep = (data?: Partial<FormData>) => {
        if (currentStep <= STEPS.length) {
            const nextStep = currentStep + 1;
            console.log(nextStep);
            navigate(STEPS[nextStep].path);

            if (data) {
                setFormData((prev) => ({ ...prev, step: nextStep, formData: { ...prev.formData, ...data } }));
            }
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            const prevStep = currentStep - 1;
            navigate(STEPS[prevStep].path);

            setFormData((prev) => ({ ...prev, step: prevStep }));
        }
    };

    useEffect(() => {
        if (currentStep === STEPS.length - 1) {
            clear(false);
        }
    }, [currentStep, clear]);

    const contextValue = {
        formData,
        setFormData,
        steps: STEPS,
        currentStep,
        nextStep,
        prevStep
    };

    return (
        <div className="container">
            <div className="max-w-screen-lg mx-auto">
                <FormContext.Provider value={contextValue}>
                    <StepLayout>
                        <Routes>
                            {/* Redirect from base "/" */}
                            <Route index element={<Navigate to={STEPS[currentStep].path} replace />} />

                            {/* Proper route mapping */}
                            {STEPS.map((step, index) => (
                                <Route
                                    key={step.path}
                                    path={step.path}
                                    element={
                                        index <= currentStep ? (
                                            step.component
                                        ) : (
                                            <Navigate to={`/${STEPS[currentStep].path}`} replace />
                                        )
                                    }
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
