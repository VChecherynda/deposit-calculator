'use client';

import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

import { Button, LinkButton, Link } from '@/shared/ui';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';

import { NAVIGATION } from '@/widgets/header/configs';

export function Header() {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-black">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            name="DCalc"
                            className="font-mono text-2xl text-white"
                        />
                    </div>

                    <div className="hidden sm:block">
                        <nav className="ml-10 flex items-baseline space-x-4">
                            {NAVIGATION.map((item) => (
                                <div
                                    key={item.name}
                                    className="ml-10 flex items-baseline space-x-4"
                                >
                                    <LinkButton
                                        href={item.href}
                                        name={item.name}
                                        variant="black"
                                    />
                                </div>
                            ))}
                        </nav>
                    </div>

                    <DropdownMenu open={open}>
                        <DropdownMenuTrigger asChild className="sm:hidden">
                            <Button
                                className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                onClick={() => setOpen(!open)}
                            >
                                <HamburgerMenuIcon className="text-2xl" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-56"
                            onPointerDownOutside={() => setOpen(false)}
                        >
                            <DropdownMenuGroup>
                                {NAVIGATION.map((item) => (
                                    <DropdownMenuItem
                                        key={item.name}
                                        className="t w-full"
                                    >
                                        <Link
                                            href={item.href}
                                            name={item.name}
                                            variant="full"
                                            className="p-2"
                                            onClick={() => setOpen(false)}
                                        />
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    );
}
