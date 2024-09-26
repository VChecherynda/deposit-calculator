import React from 'react';
import NextLink from 'next/link';
import * as Icons from 'react-icons/bs';

export const LinkIcon = ({
    href,
    icon,
    color,
    className = '',
}: {
    href: string;
    icon: string;
    color: string;
    className?: string;
}) => {
    const IconComponent = Icons[icon as keyof typeof Icons];

    return (
        <NextLink href={href}>
            <IconComponent className={className} color={color} />
        </NextLink>
    );
};
