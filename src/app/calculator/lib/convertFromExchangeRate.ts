import BigNumber from 'bignumber.js';

export const convertFromExchangeRate = (
    value: number,
    exchangeRate: string | number | undefined
) => {
    if (!value || !exchangeRate) {
        return 0;
    }

    return Number(new BigNumber(value).dividedBy(exchangeRate));
};
