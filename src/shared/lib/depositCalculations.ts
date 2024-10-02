import { v4 as uuidv4 } from 'uuid';

export function calculateYearsMonthsDays(totalDays: number | undefined) {
    if (!totalDays) {
        return {};
    }

    const years = Math.floor(totalDays / 365);

    const month = Math.floor((totalDays - years * 365) / 30);

    const days = Math.floor(totalDays - years * 365 - month * 30);

    return {
        years,
        month,
        days,
    };
}

export const calculateInterestPerMonth = ({
    balance,
    interestRate,
}: {
    balance: number;
    interestRate: number;
}) => {
    return balance * (Number(interestRate) / 100 / 12);
};

type Deposits = {
    goal: string | number | null;
    savings: string | number | null;
    interestRate: string | number | null;
};

export const calculateDepoists = ({
    goal,
    savings,
    interestRate,
}: Deposits) => {
    if (goal && savings && interestRate) {
        const deposits = [];

        let month = 0;
        let savingsAcc = 0;
        let balanceAcc = 0;
        let interestBalance = 0;

        while (interestBalance <= Number(goal) * 12) {
            balanceAcc += Number(savings);
            savingsAcc += Number(savings);

            const interest = calculateInterestPerMonth({
                balance: balanceAcc,
                interestRate: Number(interestRate),
            });

            interestBalance += interest;
            balanceAcc += interest;
            month += 1;

            deposits.push({
                id: uuidv4(),
                month,
                savings: savingsAcc,
                balance: balanceAcc,
            });
        }

        return {
            deposits,
            totalDays: deposits[deposits.length - 1].month * 30,
            totalSavings: deposits[deposits.length - 1].savings,
            totalBalance: deposits[deposits.length - 1].balance,
        };
    }

    return {
        deposits: [],
        totalDays: 0,
        totalSavings: 0,
        totalBalance: 0,
    };
};
