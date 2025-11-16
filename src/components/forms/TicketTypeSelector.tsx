import { useState } from 'react';

type TicketType = 'standard' | 'premium' | 'vip';

const options: { value: TicketType; label: string }[] = [
    { value: 'standard', label: 'Standard' },
    { value: 'premium', label: 'Premium' },
    { value: 'vip', label: 'VIP' }
];

export default function TicketTypeSelector({
    value,
    onChange
}: {
    value?: TicketType;
    onChange?: (value: TicketType) => void;
}) {
    const [ticketType, setTicketType] = useState<TicketType>(value ?? 'standard');

    const handleSelect = (value: TicketType) => {
        setTicketType(value);
        onChange?.(value);
    };

    return (
        <div className="flex flex-col gap-2">
            <p className="text-xs lg:text-sm text-gray-200">Ticket type</p>
            <div className="flex gap-3" role="radiogroup">
                {options.map((option) => {
                    const isActive = option.value === ticketType;

                    return (
                        <button
                            key={option.value}
                            onClick={() => handleSelect(option.value)}
                            role="radio"
                            aria-checked={isActive}
                            tabIndex={0}
                            className={`flex flex-col items-center justify-center px-5 py-3 rounded-xl border transition-all cursor-pointer select-none hover:bg-dark-bg-contrast/10 focus:!outline-none focus:bg-dark-bg-contrast/10 ${isActive ? 'border-orange-400 bg-dark-bg-contrast/10' : 'border-dark-bg-contrast'}`}
                        >
                            <span className="font-medium">{option.label}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
