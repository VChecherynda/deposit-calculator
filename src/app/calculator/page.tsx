'use client';

import { useState } from 'react';
import { FormSavings } from './ui';
import { Savings } from '@/app/calculator/types/Savings';

const calculateYearSavings = (values: Savings) => {
    const { savings, percent } = values;

    if (!percent || !savings) {
        return 0;
    }

    const yearSavings = Number(savings) * 12;

    const earningPerYear = yearSavings * (1 + Number(percent) / 100);

    return earningPerYear;
};

const calculateTotalYears = (values: Savings) => {
    const { goal, savings, percent } = values;

    if (!percent || !savings || !goal) {
        return 0;
    }

    const goalSavings = Number(goal) * 12;

    const yearSavings = Number(savings) * 12;

    const earningPerYear = (yearSavings / 100) * Number(percent);

    return goalSavings / earningPerYear;
};

export default function Calculator() {
    const [values, setValues] = useState<Savings>({
        goal: '',
        savings: '',
        percent: '',
    });

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <FormSavings
                values={values}
                onChange={(e: any) =>
                    setValues((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                    }))
                }
            />
            ---
            <div>
                Total:{' '}
                {calculateYearSavings(values) * calculateTotalYears(values)}
            </div>
            <div>Years: {calculateTotalYears(values)}</div>
        </main>
    );
}
