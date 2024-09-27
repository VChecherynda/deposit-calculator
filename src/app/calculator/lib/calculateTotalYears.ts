export const calculateTotalYears = (params: {
    goal: number | undefined;
    savings: number | undefined;
    percent: number | undefined;
}) => {
    const { goal, savings, percent } = params;

    if (!goal || !savings || !percent) {
        return 0;
    }

    const goalSavings = goal * 12;

    const yearSavings = savings * 12;

    const earningPerYear = (yearSavings / 100) * percent;

    return goalSavings / earningPerYear;
};
