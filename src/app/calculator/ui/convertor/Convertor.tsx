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
    CardHeader,
    CardTitle,
} from '@/shared/ui/card';
import {
    convertFromExchangeRate,
    convertToExchangeRate,
} from '@/app/calculator/lib';

export const Convertor = () => {
    const [currentValue, setCurrentCurrency] = useState<string>('');
    const [currencyFrom, setCurrencyFrom] = useState<string>('usd');
    const [currencyTo, setCurrencyTo] = useState<string>('');
    const [currencyFromValue, setCurrencyFromValue] = useState<number>(100);
    const [currencyToValue, setCurrencyToValue] = useState<number>(0);

    const { isFetching: isFetchingList, data: currencyList } =
        useQuery(queryCurrencyList());

    const { data: { fromCurrency, toCurrency, exchangeRate } = {} } = useQuery(
        queryCurrencyCurrent(currencyFrom, currencyTo)
    );

    useEffect(() => {
        if (exchangeRate && currencyTo === currentValue) {
            if (currencyToValue === 0 && currencyFromValue > 0) {
                setCurrencyToValue(
                    convertToExchangeRate(currencyFromValue, exchangeRate)
                );
            } else {
                setCurrencyFromValue(
                    convertToExchangeRate(currencyToValue, exchangeRate)
                );
            }
        }

        if (exchangeRate && currencyFrom === currentValue) {
            if (currencyFromValue === 0 && currencyToValue > 0) {
                setCurrencyFromValue(
                    convertToExchangeRate(currencyToValue, exchangeRate)
                );
            } else {
                setCurrencyToValue(
                    convertToExchangeRate(currencyFromValue, exchangeRate)
                );
            }
        }
    }, [exchangeRate, currentValue]);

    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle className="text-2xl">Currency convertor</CardTitle>
                <CardDescription>
                    {`Exch Rate: 
                        ${exchangeRate ? `${fromCurrency?.toUpperCase()} -> ${toCurrency?.toUpperCase()}: ${exchangeRate}` : ''}
                    `}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Select
                    label="Select currency to convert from"
                    name="currency"
                    value={currencyFrom}
                    loading={isFetchingList}
                    options={currencyList ?? []}
                    onChange={(value) => {
                        setCurrencyFrom(value);
                        setCurrentCurrency(value);
                    }}
                />
                <Input
                    label={`Currency ${currencyFrom.toUpperCase()}`}
                    name="currency"
                    value={currencyFromValue}
                    onChange={(e) => {
                        const { value } = e.target;
                        setCurrencyFromValue(value ? Number(value) : value);

                        if (value) {
                            setCurrencyToValue(
                                convertFromExchangeRate(
                                    Number(value),
                                    exchangeRate
                                )
                            );
                        }
                    }}
                />
                <Select
                    label="Select currency to convert to"
                    name="currency"
                    value={currencyTo}
                    loading={isFetchingList}
                    options={currencyList ?? []}
                    onChange={(value) => {
                        setCurrencyTo(value);
                        setCurrentCurrency(value);
                    }}
                />
                <Input
                    label={`Currency ${currencyTo.toUpperCase()}`}
                    name="currency"
                    value={currencyToValue}
                    onChange={(e) => {
                        const { value } = e.target;
                        setCurrencyToValue(value ? Number(value) : value);

                        if (value) {
                            setCurrencyFromValue(
                                convertFromExchangeRate(
                                    Number(value),
                                    exchangeRate
                                )
                            );
                        }
                    }}
                />
            </CardContent>
        </Card>
    );
};
