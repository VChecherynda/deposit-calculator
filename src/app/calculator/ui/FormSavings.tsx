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
        value: string | number;
        namePrev?: string;
        valuePrev?: string | number;
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

    console.log('[values]', values);

    return (
        <>
            <Select
                label="Select currency to convert"
                name="currency"
                value={values.currencyCur}
                loading={isFetchingList}
                options={currencyList ?? []}
                onChange={(e) => {
                    console.log('[value]', e.target.value);

                    onChange({
                        name: 'currencyCur',
                        value: e.target.value,
                        namePrev: 'currencyPrev',
                        valuePrev: values.currencyCur,
                    });
                }}
            />
            <Input
                label={`Your goal ${values.currencyCur.toUpperCase()} per/month`}
                name="goal"
                type="number"
                value={values.goal}
                onChange={(e) =>
                    onChange({ name: 'goal', value: Number(e.target.value) })
                }
            />
            <Input
                label={`Savings ${values.currencyCur.toUpperCase()} per/month`}
                name="savings"
                type="number"
                value={values.savings}
                onChange={(e) => {
                    onChange({
                        name: 'savings',
                        value: Number(e.target.value),
                    });
                }}
            />
            <Input
                label="Percent (%)"
                name="percent"
                type="number"
                value={values.percent}
                onChange={(e) =>
                    onChange({ name: 'percent', value: Number(e.target.value) })
                }
            />
        </>
    );
};
