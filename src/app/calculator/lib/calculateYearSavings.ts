export const calculateYearSavings = (params: {
    percent: number | undefined;
    savings: number | undefined;
}) => {
    const { savings, percent } = params;

    if (!percent || !savings) {
        return 0;
    }

    const yearSavings = savings * 12;

    const earningPerYear = yearSavings * (1 + percent / 100);

    return earningPerYear;
};
