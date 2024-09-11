import { Savings } from '@/app/calculator/types/Savings';

export const calculateTotalYears = (values: Savings) => {
    const { goal, savings, percent } = values;

    if (!percent || !savings || !goal) {
        return 0;
    }

    const goalSavings = Number(goal) * 12;

    const yearSavings = Number(savings) * 12;

    const earningPerYear = (yearSavings / 100) * Number(percent);

    return goalSavings / earningPerYear;
};
