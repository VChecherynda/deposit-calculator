import React from 'react';
import NextLink from 'next/link';

export const Link = ({
    href,
    name,
    variant = 'default',
    onClick,
}: {
    href: string;
    name: string | JSX.Element;
    variant?: 'full' | 'default';
    onClick?: () => void;
}) => {
    if (variant === 'full') {
        return (
            <NextLink
                href={href}
                className="white block w-full text-sm font-semibold leading-6 text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={onClick}
            >
                {name}
            </NextLink>
        );
    }

    return (
        <NextLink
            href={href}
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={onClick}
        >
            {name}
        </NextLink>
    );
};
