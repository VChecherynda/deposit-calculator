'use client';

import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

import { LinkIcon, LinkButton, Link } from '@/shared/ui';
import { NAVIGATION } from '@/widgets/header/configs';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <Disclosure as="header" className="bg-gray-800">
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

                    <div className="sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon
                                aria-hidden="true"
                                className="block h-6 w-6 group-data-[open]:hidden"
                            />
                            <XMarkIcon
                                aria-hidden="true"
                                className="hidden h-6 w-6 group-data-[open]:block"
                            />
                        </DisclosureButton>
                    </div>
                </div>
            </div>

            <DisclosurePanel>
                <div className="mt-6 flow-root">
                    <div className="divide-y divide-gray-500/10">
                        {NAVIGATION.map((item) => (
                            <div
                                key={item.name}
                                className="t w-full space-y-2 py-4"
                            >
                                <Link
                                    href={item.href}
                                    name={item.name}
                                    variant="full"
                                    onClick={() => setMobileMenuOpen(false)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}
