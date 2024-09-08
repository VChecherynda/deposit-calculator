import React from 'react';
import NextLink from 'next/link';

export const Link = ({
    href,
    name,
    onClick,
}: {
    href: string;
    name: string | JSX.Element;
    onClick?: () => void;
}) => {
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
