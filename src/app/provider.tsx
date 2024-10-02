'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';

const queryClient = new QueryClient();

queryClient.invalidateQueries({ queryKey: ['fromCurrency'] });

export const Providers = ({ children }: { children: JSX.Element }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Suspense>{children}</Suspense>
        </QueryClientProvider>
    );
};
