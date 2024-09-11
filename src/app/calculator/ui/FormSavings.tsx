'use client';

import { useQuery } from '@tanstack/react-query';

import { Select, Input } from '@/shared/ui';
import { Savings } from '@/app/calculator/types/Savings';
import {
    queryCurrencyList,
    queryCurrencyCurrent,
} from '@/shared/api/calculator/query';
import { useEffect } from 'react';

export const FormSavings = ({
    values,
    onChange,
    onChangeRate,
}: {
    values: Savings;
    onChange: ({
        name,
        value,
    }: {
        name: string;
        value: string;
        namePrev?: string;
        valuePrev?: string;
    }) => void;
    onChangeRate: (exchangeRate: number) => void;
}) => {
    const { isFetching: isFetchingList, data: currencyList } =
        useQuery(queryCurrencyList());

    const { data: exchangeRate } = useQuery(
        queryCurrencyCurrent(values.currencyPrev, values.currencyCur)
    );

    useEffect(() => {
        if (exchangeRate) {
            onChangeRate(exchangeRate);
        }
    }, [onChangeRate, exchangeRate]);

    return (
        <>
            {isFetchingList ? (
                'Loading...'
            ) : (
                <Select
                    label="Select currency to convert"
                    name="currency"
                    value={values.currencyCur}
                    options={currencyList ?? []}
                    onChange={(e) =>
                        onChange({
                            name: 'currencyCur',
                            value: e.target.value,
                            namePrev: 'currencyPrev',
                            valuePrev: values.currencyCur,
                        })
                    }
                />
            )}
            <Input
                label={`Your goal ${values.currencyCur} per/month`}
                name="goal"
                value={values.goal}
                onChange={(e) =>
                    onChange({ name: 'goal', value: e.target.value })
                }
            />
            <Input
                label={`Savings ${values.currencyCur} per/month`}
                name="savings"
                value={values.savings}
                onChange={(e) =>
                    onChange({ name: 'savings', value: e.target.value })
                }
            />
            <Input
                label="Percent (%)"
                name="percent"
                value={values.percent}
                onChange={(e) =>
                    onChange({ name: 'percent', value: e.target.value })
                }
            />
        </>
    );
};
