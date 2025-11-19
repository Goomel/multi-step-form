import { useEffect, useState } from 'react';
import type { FormData } from '@/types';

export const useLocalStorage = () => {
    const defaultValue: FormData = {
        name: '',
        email: '',
        street: '',
        city: '',
        zipCode: '',
        ticketType: '',
        ticketQuantity: 0
    };
    const [value, setValue] = useState<FormData>(defaultValue);

    useEffect(() => {
        const storedValue = localStorage.getItem('formData');
        if (storedValue) {
            setValue(JSON.parse(storedValue));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(value));
    }, [value]);

    return [value, setValue] as [FormData, React.Dispatch<React.SetStateAction<FormData>>];
};
