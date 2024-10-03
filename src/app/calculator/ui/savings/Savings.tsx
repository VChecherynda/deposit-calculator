'use client';
import { Cross1Icon } from '@radix-ui/react-icons';
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
    calculateDepoists,
    calculateYearsMonthsDays,
} from '@/shared/lib/depositCalculations';

import { BigNumber } from '@/shared/lib/bigNumber';
import { Button, LinkButton } from '@/shared/ui';

// TO-DO need implement logic for calculate deposit values
export const Savings = ({ hideCard }: { hideCard: (params: any) => void }) => {
    const [currencyPrev, setCurrencyPrev] = useState<string>('');
    const [currencyCur, setCurrencyCur] = useState<string>('usd');
    const [goal, setGoal] = useState<number>(500);
    const [savings, setSavings] = useState<number>(2000);
    const [interestRate, setInterestRate] = useState<number>(8);

    const { isFetching: isFetchingList, data: currencyList } =
        useQuery(queryCurrencyList());

    const { data: { exchangeRate } = {} } = useQuery(
        queryCurrencyCurrent(currencyPrev, currencyCur)
    );

    useEffect(() => {
        if (exchangeRate) {
            setGoal(Number(new BigNumber(goal).multipliedBy(exchangeRate)));
            setSavings(
                Number(new BigNumber(savings).multipliedBy(exchangeRate))
            );
        }
        // eslint-disable-next-line
    }, [exchangeRate]);

    const { totalDays, totalBalance } = calculateDepoists({
        goal,
        savings,
        interestRate,
    });

    const { years, month, days } = calculateYearsMonthsDays(totalDays);

    return (
        <Card className="mb-8 w-full sm:w-1/2">
            <CardHeader className="relative">
                <CardTitle className="flex justify-between text-2xl">
                    Calculate Сompound interest
                </CardTitle>

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={hideCard}
                    className="absolute right-2 top-1"
                >
                    <Cross1Icon className="h-4 w-4" />
                </Button>

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
                    label="Interest Rate (%)"
                    name="interest"
                    value={interestRate}
                    onChange={(e) => {
                        const { value } = e.target;
                        setInterestRate(value ? Number(value) : value);
                    }}
                />
            </CardContent>
            <CardFooter>
                <div className="flex w-full flex-wrap">
                    <div className="mb-4 w-full">
                        <b>Total:</b>
                        <br />
                        {totalBalance.toFixed(2)}
                    </div>
                    <div className="mb-4 flex w-full items-end justify-between">
                        <div>
                            <b>Term:</b>
                            <br />
                            {`${years} years ${month} month ${days} days`}
                        </div>
                        <LinkButton
                            href={`/dashboard?goal=${goal}&savings=${savings}&interestRate=${interestRate}&currency=${currencyCur.toUpperCase()}`}
                            name="Detials"
                        />
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
};
