'use client';
import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { Select, Input } from '@/widgets/form';
import {
    queryCurrencyList,
    queryCurrencyCurrent,
} from '@/shared/api/calculator/query';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/shared/ui/card';

import BigNumber from 'bignumber.js';

export const Convertor = () => {
    const [currencyPrev, setCurrencyPrev] = useState<string>('');
    const [currencyCur, setCurrencyCur] = useState<string>('usd');
    const [currencyValue, setCurrencyValue] = useState<number>(100);

    const { isFetching: isFetchingList, data: currencyList } =
        useQuery(queryCurrencyList());

    const { data: exchangeRate } = useQuery(
        queryCurrencyCurrent(currencyPrev, currencyCur)
    );

    useEffect(() => {
        if (exchangeRate) {
            setCurrencyValue(
                Number(new BigNumber(currencyValue).multipliedBy(exchangeRate))
            );
        }
    }, [exchangeRate]);

    console.log(
        '[currencyValue]',
        currencyValue ? currencyValue.toFixed(2) : currencyValue
    );

    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle className="text-2xl">Conver currency</CardTitle>
                <CardDescription>Simple currency convertor</CardDescription>
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
                    label={`Currency ${currencyCur.toUpperCase()}`}
                    name="currency"
                    value={currencyValue}
                    onChange={(e) => {
                        const { value } = e.target;
                        setCurrencyValue(value ? Number(value) : value);
                    }}
                />
            </CardContent>
        </Card>
    );
};
