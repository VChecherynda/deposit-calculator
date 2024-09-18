import React from 'react';
import NextLink from 'next/link';
import * as Icons from 'react-icons/bs';

export const LinkIcon = ({
    href,
    icon,
    color,
}: {
    href: string;
    icon: string;
    color: string;
}) => {
    const IconComponent = Icons[icon as keyof typeof Icons];

    return (
        <NextLink href={href}>
            <IconComponent color={color} />
        </NextLink>
    );
};
