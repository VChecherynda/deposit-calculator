import React from 'react';
import NextLink from 'next/link';

const VARIANTS_CONFIG = {
    theme: 'bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600',
    black: 'text-gray-300 hover:bg-gray-700 hover:text-white',
};

export const LinkButton = ({
    href,
    name,
    variant = 'theme',
    onClick,
}: {
    href: string;
    name: string;
    variant?: 'theme' | 'black';
    onClick?: () => void;
}) => {
    return (
        <button
            type="button"
            className={`rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${VARIANTS_CONFIG[variant]}`}
            onClick={onClick}
        >
            <NextLink href={href}>{name}</NextLink>
        </button>
    );
};
