'use client';

import { useEffect, useLayoutEffect, useState } from 'react';

const useLocalStorage = (key: string, initialValue: any) => {
    const [state, setState] = useState(initialValue);

    useLayoutEffect(() => {
        if (typeof window === 'undefined') return;

        try {
            const value = window.localStorage.getItem(key);
            if (value) {
                setState(JSON.parse(value));
            }
        } catch (err) {
            console.log(err);
        }
    }, [key]);

    const setValue = (value: any) => {
        try {
            if (typeof window === 'undefined') {
                console.warn('LocalStorage is not available');
                return;
            }

            const valueToStore =
                value instanceof Function ? value(state) : value;
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
            setState(value);
        } catch (err) {
            console.log(err);
        }
    };

    return [state, setValue];
};

export default useLocalStorage;
