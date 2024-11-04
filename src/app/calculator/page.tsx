'use client';

import { useLayoutEffect, useState } from 'react';
import { Convertor } from '@/features/exchange';
import { Savings } from '@/features/savings';
import useLocalStorage from '@/shared/hooks/useLocalStorage';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { Button } from '@/components';

const CONFIG = [
    {
        id: 'convertor',
        name: 'Convertor',
    },
    {
        id: 'savings',
        name: 'Savings',
    },
];

export default function Calculator() {
    const [persistMenu, setPersistMenu] = useLocalStorage('menu', null);
    const [persistCards, setPersistCards] = useLocalStorage('cards', null);

    const [menu, setMenu] = useState<string[] | null>(null);
    const [cards, setCards] = useState<string[] | null>(null);

    const showCard = (id: string) => {
        setMenu((prev) => {
            const filteredMenu = prev
                ? [...prev.filter((menuItem) => menuItem !== id)]
                : [];
            setPersistMenu(filteredMenu);
            return filteredMenu;
        });
        setCards((prev) => {
            const filteredCards = prev
                ? prev.includes(id)
                    ? prev
                    : [...prev, id]
                : [];
            setPersistCards(filteredCards);
            return filteredCards;
        });
    };

    const hideCard = (id: string) => {
        setMenu((prev) => {
            const filteredMenu = prev
                ? prev.includes(id)
                    ? prev
                    : [...prev, id]
                : [];
            setPersistMenu(filteredMenu);
            return filteredMenu;
        });
        setCards((prev) => {
            const filteredCards = prev
                ? [...prev.filter((menuItem) => menuItem !== id)]
                : null;
            setPersistCards(filteredCards);
            return filteredCards;
        });
    };

    useLayoutEffect(() => {
        setMenu(persistMenu ?? [CONFIG[1].id]);
        setCards(persistCards ?? [CONFIG[0].id]);
    }, [persistMenu, persistCards]);

    const config = CONFIG.filter((item) => menu?.includes(item.id));

    return (
        <div>
            <div className="mx-auto gap-8 px-8 pt-8 sm:flex sm:pt-16">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button>Add Card</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="start">
                        {config.length > 0 ? (
                            config.map((item) => (
                                <DropdownMenuItem
                                    key={item.id}
                                    onSelect={() => showCard(item.id)}
                                >
                                    <span>{item.name}</span>
                                </DropdownMenuItem>
                            ))
                        ) : (
                            <DropdownMenuItem>No Cards Left</DropdownMenuItem>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="mx-auto gap-8 p-8 sm:flex sm:py-16">
                {!cards && 'Loading...'}

                {cards && !cards.length && <p>No Cards Left</p>}

                {cards &&
                    cards.length > 0 &&
                    cards.map((card) => {
                        if (card === 'convertor') {
                            return (
                                <Convertor
                                    key={card}
                                    hideCard={() => hideCard('convertor')}
                                />
                            );
                        }

                        if (card === 'savings') {
                            return (
                                <Savings
                                    key={card}
                                    hideCard={() => hideCard('savings')}
                                />
                            );
                        }
                    })}
            </div>
        </div>
    );
}
