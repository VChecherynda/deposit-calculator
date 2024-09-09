import React from 'react';
import NextLink from 'next/link';
import NextImage from 'next/image';

export const LinkIcon = ({
    href,
    iconSrc,
}: {
    href: string;
    iconSrc: string;
}) => {
    return (
        <NextLink href={href}>
            <NextImage
                width="32"
                height="32"
                className="h-8 w-8"
                src={iconSrc}
                alt="Your Company"
            />
        </NextLink>
    );
};
