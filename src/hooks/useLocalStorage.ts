import { useEffect, useState } from 'react';

type UseLocalStorageType<T> = {
    key: string;
    initialValue: T;
};

export const useLocalStorage = <T>({ key, initialValue }: UseLocalStorageType<T>) => {
    const [value, setValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch {
            return initialValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue] as [T, React.Dispatch<React.SetStateAction<T>>];
};
