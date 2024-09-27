import type { Metadata } from 'next';
import { Header } from '@/widgets';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Dcalc',
    description: 'Applciation for calculate your deposit',
};

import { Providers } from './provider';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Providers>
                <body className={inter.className}>
                    <Header />
                    <main className="mx-auto max-w-[980px]">{children}</main>
                </body>
            </Providers>
        </html>
    );
}
