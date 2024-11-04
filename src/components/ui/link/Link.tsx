import React from 'react';
import NextLink from 'next/link';
import { cn } from '@/shared/lib/utils';

export const Link = ({
    href,
    name,
    className = 'text-sm text-gray-300',
    variant = 'default',
    onClick,
}: {
    href: string;
    name: string | JSX.Element;
    className?: string;
    variant?: 'full' | 'default';
    onClick?: () => void;
}) => {
    if (variant === 'full') {
        return (
            <NextLink
                href={href}
                className={cn(
                    className,
                    'white block w-full font-semibold leading-6'
                )}
                onClick={onClick}
            >
                {name}
            </NextLink>
        );
    }

    return (
        <NextLink
            href={href}
            className={cn(className, 'font-semibold leading-6')}
            onClick={onClick}
        >
            {name}
        </NextLink>
    );
};
