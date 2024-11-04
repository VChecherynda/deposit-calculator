import { queryOptions } from '@tanstack/react-query';
import { transformFromCurrencyDTOtoCurrency } from "@/shared/services/mappers"

export function queryCurrencyCurrent(
    fromCurrency: string | undefined,
    toCurrency: string
) {
    return queryOptions({
        queryKey: ['fromCurrency', fromCurrency, 'toCurrency', toCurrency],
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
