'use client';

import { useState } from 'react';

import { FormSavings } from './ui';
import { Savings } from '@/app/calculator/types/Savings';
import {
    calculateYearSavings,
    calculateTotalYears,
} from '@/app/calculator/lib';

export default function Calculator() {
    const [values, setValues] = useState<Savings>({
        currencyPrev: '',
        currencyCur: 'usd',
        exchangeRate: 0,
        goal: '500',
        savings: '2000',
        percent: '8',
    });

    const onChange = ({
        name,
        value,
        namePrev,
        valuePrev,
    }: {
        name: string;
        value: string;
        namePrev?: string;
        valuePrev?: string;
    }) => {
        setValues((prev) => ({
            ...prev,
            [name]: value,
            ...(namePrev && valuePrev ? { [namePrev]: valuePrev } : {}),
        }));
    };

    const onChangeRate = (exchangeRate: number) => {
        setValues((prev) => {
            if (prev.exchangeRate === exchangeRate || exchangeRate === 0) {
                return prev;
            }

            return {
                ...prev,
                exchangeRate,
                goal: ((Number(prev.goal) / 100) * exchangeRate * 100).toFixed(
                    2
                ),
                savings: (
                    (Number(prev.savings) / 100) *
                    exchangeRate *
                    100
                ).toFixed(2),
            };
        });
    };

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <FormSavings
                values={values}
                onChange={onChange}
                onChangeRate={onChangeRate}
            />
            ---
            <div>
                Total:
                {` ${calculateYearSavings(values) * calculateTotalYears(values)}`}
            </div>
            <div>Years: {calculateTotalYears(values)}</div>
        </main>
    );
}
