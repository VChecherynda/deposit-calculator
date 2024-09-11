'use client';

import { useState } from 'react';
import BigNumber from 'bignumber.js';

import { FormSavings, Total } from './ui';
import { Savings } from '@/app/calculator/types/Savings';

BigNumber.config({ DECIMAL_PLACES: 2 }); // equivalent

export default function Calculator() {
    const [values, setValues] = useState<Savings>({
        currencyPrev: '',
        currencyCur: 'usd',
        exchangeRate: 0,
        goal: 500,
        savings: 2000,
        percent: 8,
    });

    const onChange = ({
        name,
        value,
        namePrev,
        valuePrev,
    }: {
        name: string;
        value: number;
        namePrev?: string;
        valuePrev?: number;
    }) => {
        setValues((prev) => ({
            ...prev,
            [name]: Number(value),
            ...(namePrev && valuePrev ? { [namePrev]: Number(valuePrev) } : {}),
        }));
    };

    const onChangeRate = (exchangeRate: number) => {
        setValues((prev) => {
            if (prev.exchangeRate === exchangeRate || exchangeRate === 0) {
                return prev;
            }

            const goal = new BigNumber(prev.goal);
            const savings = new BigNumber(prev.savings);
            const rate = new BigNumber(exchangeRate);

            return {
                ...prev,
                exchangeRate,
                goal: goal.multipliedBy(rate).toNumber(),
                savings: savings.multipliedBy(rate).toNumber(),
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
            <Total values={values} />
        </main>
    );
}
