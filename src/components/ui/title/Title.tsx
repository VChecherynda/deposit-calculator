import React from 'react';

export function Title({ title }: { title: string }) {
    return (
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {title}
        </h1>
    );
}
