'use client';

import { Savings, Convertor } from './ui';

export default function Calculator() {
    return (
        <div className="mx-auto gap-8 p-8 sm:flex sm:py-16">
            <Savings />
            <Convertor />
        </div>
    );
}
