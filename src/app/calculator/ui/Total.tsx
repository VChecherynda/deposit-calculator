import {
    calculateYearSavings,
    calculateTotalYears,
    calculateYearsMonthsDays,
} from '@/app/calculator/lib';
import { Savings } from '../types/Savings';

export function Total({ values }: { values: Savings }) {
    const { years, month, days } = calculateYearsMonthsDays(
        calculateTotalYears(values)
    );

    const totalSum = Number(
        `${calculateYearSavings(values) * calculateTotalYears(values)}`
    ).toFixed(2);

    return (
        <>
            <div>
                <b>Total:</b> ${totalSum} ${values.currencyCur}
            </div>
            <div>
                <b>Term:</b> ${years} years, ${month} month ${days} days
            </div>
        </>
    );
}
