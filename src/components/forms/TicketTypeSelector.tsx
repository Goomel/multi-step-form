import { useState, useEffect } from 'react';
import type { UseFormSetValue } from 'react-hook-form';

type TicketType = 'standard' | 'premium' | 'vip';

const options: { value: TicketType; label: string }[] = [
    { value: 'standard', label: 'Standard' },
    { value: 'premium', label: 'Premium' },
    { value: 'vip', label: 'VIP' }
];

export default function TicketTypeSelector({
    value,
    setValue
}: {
    value?: TicketType;
    setValue: UseFormSetValue<any>;
}) {
    const [ticketType, setTicketType] = useState<TicketType>(value ?? 'standard');

    useEffect(() => {
        setValue('ticketType', ticketType, { shouldValidate: true });
    }, [ticketType, setValue]);

    const handleSelect = (value: TicketType) => {
        setTicketType(value);
    };

    return (
        <div className="flex flex-col gap-2">
            <p className="text-xs lg:text-sm text-gray-200">Ticket type</p>
            <div className="flex flex-wrap gap-3" role="radiogroup">
                {options.map((option) => {
                    const isActive = option.value === ticketType;

                    return (
                        <button
                            key={option.value}
                            onClick={() => handleSelect(option.value)}
                            role="radio"
                            aria-checked={isActive}
                            tabIndex={0}
                            type="button"
                            className={`grow flex flex-col items-center justify-center px-5 py-3 rounded-xl border transition-all cursor-pointer select-none hover:bg-dark-bg-contrast/10 focus:!outline-none focus:bg-dark-bg-contrast/10 ${isActive ? 'border-orange-400 bg-dark-bg-contrast/10' : 'border-dark-bg-contrast'}`}
                        >
                            <span className="text-sm lg:text-base font-medium">{option.label}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
