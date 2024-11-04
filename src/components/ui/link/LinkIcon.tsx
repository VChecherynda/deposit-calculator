import React from 'react';
import NextLink from 'next/link';
import { Facebook, LinkedIn } from '@/components/ui/icons';

const CONFIG: Record<string, any> = {
    facebook: Facebook,
    linkedin: LinkedIn,
};

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
    const IconComponent = CONFIG[icon];

    return (
        <NextLink href={href}>
            <IconComponent color={color} className={className} />
        </NextLink>
    );
};
