'use client';

import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/shared/ui/table';

const deposits = [
    {
        id: 1,
        year: 'INV001',
        currency: 'Paid',
        savingsAmount: 'Credit Card',
        depositAmmount: '$250.00',
        percent: '8',
    },
    {
        id: 2,
        year: 'INV002',
        currency: 'Pending',
        savingsAmount: 'PayPal',
        depositAmmount: '$150.00',
        percent: '8',
    },
    {
        id: 3,
        year: 'INV003',
        currency: 'Unpaid',
        savingsAmount: 'Bank Transfer',
        depositAmmount: '$350.00',
        percent: '8',
    },
    {
        id: 4,
        year: 'INV004',
        currency: 'Paid',
        savingsAmount: 'Credit Card',
        depositAmmount: '$450.00',
        percent: '8',
    },
    {
        id: 5,
        year: 'INV005',
        currency: 'Paid',
        savingsAmount: 'PayPal',
        depositAmmount: '$550.00',
        percent: '8',
    },
    {
        id: 6,
        year: 'INV006',
        currency: 'Pending',
        savingsAmount: 'Bank Transfer',
        depositAmmount: '$200.00',
        percent: '8',
    },
    {
        id: 7,
        year: 'INV007',
        currency: 'Unpaid',
        savingsAmount: 'Credit Card',
        depositAmmount: '$300.00',
        percent: '8',
    },
];

export default function Dashboard() {
    return (
        <div className="mx-auto w-full p-8">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Year</TableHead>
                        <TableHead className="text-right">Currency</TableHead>
                        <TableHead className="text-right">Deposit</TableHead>
                        <TableHead className="text-right">Percent</TableHead>
                        <TableHead className="text-right">Savings</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {deposits.map((deposit) => (
                        <TableRow key={deposit.id}>
                            <TableCell className="font-medium">
                                {deposit.year}
                            </TableCell>
                            <TableCell className="text-right">
                                {deposit.currency}
                            </TableCell>
                            <TableCell className="text-right">
                                {deposit.depositAmmount}
                            </TableCell>
                            <TableCell className="text-right">
                                {deposit.percent}
                            </TableCell>
                            <TableCell className="text-right">
                                {deposit.savingsAmount}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={4}>Total</TableCell>
                        <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
}
