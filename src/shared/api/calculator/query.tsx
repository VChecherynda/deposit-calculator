'use client';

import { queryOptions } from '@tanstack/react-query';
import {
    transformCurrencyDTOtoCurrencyList,
    transformFromCurrencyDTOtoCurrency,
} from './mappers';

export function queryCurrencyList() {
    return queryOptions({
        queryKey: [],
        queryFn: async () => {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API}@latest/v1/currencies.json`
            );
            const resultJSON = await response.json();

            return transformCurrencyDTOtoCurrencyList(resultJSON);
        },
    });
}

export function queryCurrencyCurrent(
    fromCurrency: string | undefined,
    toCurrency: string
) {
    return queryOptions({
        queryKey: ['fromCurrency', fromCurrency],
        queryFn: async () => {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API}@latest/v1/currencies/${fromCurrency}.json`
            );
            const resultJSON = await response.json();

            return transformFromCurrencyDTOtoCurrency(
                resultJSON,
                fromCurrency,
                toCurrency
            );
        },
        enabled: Boolean(fromCurrency),
    });
}
