import { queryOptions } from '@tanstack/react-query';
import { transformCurrencyDTOtoCurrencyList } from "@/shared/services/mappers"

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