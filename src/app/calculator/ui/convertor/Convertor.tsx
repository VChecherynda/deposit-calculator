'use client';
import { Cross1Icon } from '@radix-ui/react-icons';
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
import { Button } from '@/shared/ui';

export const Convertor = ({
    hideCard,
}: {
    hideCard: (params: any) => void;
}) => {
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
        if (exchangeRate && currencyFrom === fromCurrency) {
            setCurrencyToValue(
                convertToExchangeRate(currencyFromValue, exchangeRate)
            );
        }

        if (exchangeRate && currencyTo === fromCurrency) {
            setCurrencyFromValue(
                convertToExchangeRate(currencyToValue, exchangeRate)
            );
        }
        // eslint-disable-next-line
    }, [exchangeRate]);

    return (
        <Card className="mb-8 w-full sm:w-1/2">
            <CardHeader className="relative">
                <CardTitle className="flex justify-between text-2xl">
                    Currency convertor
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

                        if (!currencyToValue && currencyFromValue > 0) {
                            setCurrencyToValue(currencyFromValue);
                        }
                    }}
                />
                <Input
                    label={`Currency ${currencyFrom.toUpperCase()}`}
                    name="currency"
                    value={currencyFromValue}
                    disabled={!currencyFrom.length}
                    onChange={(e) => {
                        const { value } = e.target;
                        setCurrencyFromValue(value ? Number(value) : value);

                        setCurrencyToValue(
                            fromCurrency === currencyFrom
                                ? convertToExchangeRate(
                                      Number(value),
                                      exchangeRate
                                  )
                                : convertFromExchangeRate(
                                      Number(value),
                                      exchangeRate
                                  )
                        );
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

                        if (!currencyFromValue && currencyToValue > 0) {
                            setCurrencyFromValue(currencyToValue);
                        }
                    }}
                />
                <Input
                    label={`Currency ${currencyTo.toUpperCase()}`}
                    name="currency"
                    value={currencyToValue}
                    disabled={!currencyTo.length}
                    onChange={(e) => {
                        const { value } = e.target;
                        setCurrencyToValue(value ? Number(value) : value);

                        setCurrencyFromValue(
                            fromCurrency === currencyTo
                                ? convertToExchangeRate(
                                      Number(value),
                                      exchangeRate
                                  )
                                : convertFromExchangeRate(
                                      Number(value),
                                      exchangeRate
                                  )
                        );
                    }}
                />
            </CardContent>
        </Card>
    );
};
