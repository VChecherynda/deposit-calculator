'use client';

import { useQuery } from '@tanstack/react-query';

import { Select, Input } from '@/widgets/form';
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

    return (
        <>
            <Select
                label="Select currency to convert"
                name="currency"
                value={values.currencyCur}
                loading={isFetchingList}
                options={currencyList ?? []}
                onChange={(value) => {
                    onChange({
                        name: 'currencyCur',
                        value: value,
                        namePrev: 'currencyPrev',
                        valuePrev: values.currencyCur,
                    });
                }}
            />
            <Input
                label={`Your goal ${values.currencyCur.toUpperCase()} per/month`}
                name="goal"
                value={values.goal}
                onChange={(e) =>
                    onChange({ name: 'goal', value: Number(e.target.value) })
                }
            />
            <Input
                label={`Savings ${values.currencyCur.toUpperCase()} per/month`}
                name="savings"
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
                type="text"
                value={values.percent}
                onChange={(e) =>
                    onChange({ name: 'percent', value: Number(e.target.value) })
                }
            />
        </>
    );
};
