import React from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export function Menu({ onClick }: { onClick: () => void }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
        >
            <span className="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
        </button>
    );
}
