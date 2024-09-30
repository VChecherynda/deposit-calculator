'use client';

import { useQuery } from '@tanstack/react-query';

import { Select, Input } from '@/widgets/form';
import {
    queryCurrencyList,
    queryCurrencyCurrent,
} from '@/shared/api/calculator/query';
import { useEffect, useState } from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/shared/ui/card';

import {
    calculateTotalYears,
    calculateYearSavings,
    calculateYearsMonthsDays,
} from '../../lib';

import { BigNumber } from '@/shared/lib/bigNumber';

export const Savings = () => {
    const [currencyPrev, setCurrencyPrev] = useState<string>('');
    const [currencyCur, setCurrencyCur] = useState<string>('usd');
    const [goal, setGoal] = useState<number>(500);
    const [savings, setSavings] = useState<number>(2000);
    const [percent, setPercent] = useState<number>(8);

    const { isFetching: isFetchingList, data: currencyList } =
        useQuery(queryCurrencyList());

    const { data: exchangeRate } = useQuery(
        queryCurrencyCurrent(currencyPrev, currencyCur)
    );

    useEffect(() => {
        if (exchangeRate) {
            setGoal(Number(new BigNumber(goal).multipliedBy(exchangeRate)));
            setSavings(
                Number(new BigNumber(savings).multipliedBy(exchangeRate))
            );
        }
    }, [exchangeRate]);

    const { years, month, days } = calculateYearsMonthsDays(
        calculateTotalYears({ goal, savings, percent })
    );

    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle className="text-2xl">
                    Calculate your deposit
                </CardTitle>
                <CardDescription>
                    Here you can calculate how much money do you need to save
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Select
                    label="Select currency to convert"
                    name="currency"
                    value={currencyCur}
                    loading={isFetchingList}
                    options={currencyList ?? []}
                    onChange={(value) => {
                        setCurrencyPrev(currencyCur);
                        setCurrencyCur(value);
                    }}
                />
                <Input
                    label={`Your goal ${currencyCur.toUpperCase()} per/month`}
                    name="goal"
                    value={goal}
                    onChange={(e) => {
                        const { value } = e.target;
                        setGoal(value ? Number(value) : value);
                    }}
                />
                <Input
                    label={`Savings ${currencyCur.toUpperCase()} per/month`}
                    name="savings"
                    value={savings}
                    onChange={(e) => {
                        const { value } = e.target;
                        setSavings(value ? Number(value) : value);
                    }}
                />
                <Input
                    label="Percent (%)"
                    name="percent"
                    value={percent}
                    onChange={(e) => {
                        const { value } = e.target;
                        setPercent(value ? Number(value) : value);
                    }}
                />
            </CardContent>
            <CardFooter>
                <div className="flex flex-wrap">
                    <div className="mb-4 w-full">
                        <b>Total:</b>
                        <br />
                        {(
                            calculateYearSavings({ percent, savings }) *
                            calculateTotalYears({ goal, percent, savings })
                        ).toFixed(2)}
                    </div>
                    <div className="mb-4 w-full">
                        <b>Term:</b>
                        <br /> {`${years} years ${month} month ${days} days`}
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
};
