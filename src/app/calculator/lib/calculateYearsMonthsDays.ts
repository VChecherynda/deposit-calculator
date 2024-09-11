export function calculateYearsMonthsDays(yearNumber: number) {
    const totalDays = yearNumber * 365;

    const years = Math.floor(totalDays / 365);

    const month = Math.floor((totalDays - years * 365) / 30);

    const days = Math.floor(totalDays - years * 365 - month * 30);

    return {
        years,
        month,
        days,
    };
}
