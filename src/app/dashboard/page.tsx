'use client';

import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { useSearchParams } from 'next/navigation';
import { calculateDepoists } from '@/shared/lib/depositCalculations';

enum Column {
    Month = 'month',
    Savings = 'savings',
    Balance = 'balance',
}

type Config = {
    id: string;
    headerLabel: string;
    cell: Column;
    align?: string;
};

const columnConfig: Config[] = [
    {
        id: 'month',
        headerLabel: 'Month',
        cell: Column.Month,
    },
    {
        id: 'savingsTotal',
        headerLabel: 'Savings Accumulation',
        cell: Column.Savings,
        align: 'right',
    },
    {
        id: 'balance',
        headerLabel: 'Balance Accumulation',
        cell: Column.Balance,
        align: 'right',
    },
];

export default function Dashboard() {
    const searchParams = useSearchParams();
    const goal = searchParams.get('goal');
    const savings = searchParams.get('savings');
    const interestRate = searchParams.get('interestRate');
    const currency = searchParams.get('currency');

    const { deposits, totalBalance } = calculateDepoists({
        goal,
        savings,
        interestRate,
    });

    return (
        <div className="mx-auto p-8">
            <section className="mb-4">
                <p className="mb-2">
                    <span className="font-bold">Interest rate:</span>{' '}
                    {interestRate}%
                </p>
                <p className="mb-2">
                    <span className="font-bold">Saving per/month:</span>{' '}
                    {savings}
                </p>
                <p className="mb-2">
                    <span className="font-bold">Currency:</span> {currency}
                </p>
            </section>

            <Table>
                <TableHeader>
                    <TableRow>
                        {columnConfig.map((column) => (
                            <TableHead
                                key={column.id}
                                className={
                                    column.align === 'right'
                                        ? 'text-right'
                                        : 'text-left'
                                }
                            >
                                {column.headerLabel}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {deposits?.map((deposit) => (
                        <TableRow key={deposit.id}>
                            {columnConfig.map((column) => (
                                <TableCell
                                    key={column.id}
                                    className={
                                        column.align === 'right'
                                            ? 'text-right'
                                            : 'text-left'
                                    }
                                >
                                    {deposit[column.cell].toFixed()}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={columnConfig.length - 1}>
                            Total
                        </TableCell>
                        <TableCell className="text-right">
                            {`${totalBalance.toFixed(2)} ${currency}`}
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
}
