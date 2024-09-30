import { CurrencyDictionaryDTO, CurrencyCurrentDTO } from './types';

export function transformCurrencyDTOtoCurrencyList(
    data: CurrencyDictionaryDTO
) {
    const list = [];

    for (const [key, value] of Object.entries(data)) {
        if (key && value) {
            list.push({ key, value });
        }
    }

    return list;
}

export function transformFromCurrencyDTOtoCurrency(
    data: CurrencyCurrentDTO,
    fromCurrency: string | undefined,
    toCurrency: string
) {
    if (fromCurrency) {
        return {
            fromCurrency,
            toCurrency,
            exchangeRate: data[fromCurrency][toCurrency],
        };
    }

    return {};
}
