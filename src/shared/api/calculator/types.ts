export type CurrencyDictionaryDTO = Record<string, string>;

export type CurrencyCurrentDTO = {
    [key: string]: string | Record<string, number>;
};
