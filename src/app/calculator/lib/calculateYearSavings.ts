import { Savings } from '@/app/calculator/types/Savings';

export const calculateYearSavings = (values: Savings) => {
    const { savings, percent } = values;

    if (!percent || !savings) {
        return 0;
    }

    const yearSavings = Number(savings) * 12;

    const earningPerYear = yearSavings * (1 + Number(percent) / 100);

    return earningPerYear;
};
