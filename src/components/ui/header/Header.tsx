'use client';

import { Dialog, DialogPanel } from '@headlessui/react';
import { useState } from 'react';

import { LinkIcon, LinkButton, Menu } from '@/components/ui';

const NAVIGATION = [
    {
        href: '/',
        name: 'Home',
    },
    {
        href: '/calculator',
        name: 'Calculator',
    },
    {
        href: '/about',
        name: 'About',
    },
    {
        href: '/contact',
        name: 'Contact',
    },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-shrink-0">
                        <LinkIcon
                            href="/"
                            iconSrc="https://tailwindui.com/img/logos/mark.svg"
                        />
                    </div>

                    <div className="hidden md:block">
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

                    <div className="flex lg:hidden">
                        <Menu onClick={() => setMobileMenuOpen(false)} />
                    </div>
                </div>
            </div>

            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className="lg:hidden"
            >
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <LinkIcon
                            href="/"
                            iconSrc="https://tailwindui.com/img/logos/mark.svg"
                        />
                    </div>

                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {NAVIGATION.map((item) => (
                                    <LinkButton
                                        key={item.name}
                                        href={item.href}
                                        name={item.name}
                                        onClick={() => setMobileMenuOpen(false)}
                                        variant="black"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
