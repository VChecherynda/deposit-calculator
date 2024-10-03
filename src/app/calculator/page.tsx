'use client';

import { useState } from 'react';
import { Savings, Convertor, Add } from '@/app/calculator/ui';

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
    const [menu, setMenu] = useState<string[]>([CONFIG[1].id]);
    const [cards, setCards] = useState<string[]>([CONFIG[0].id]);

    const showCard = (id: string) => {
        setMenu((prev) => [...prev.filter((menuItem) => menuItem !== id)]);
        setCards((prev) => (prev.includes(id) ? prev : [...prev, id]));
    };

    const hideCard = (id: string) => {
        setMenu((prev) => (prev.includes(id) ? prev : [...prev, id]));
        setCards((prev) => [...prev.filter((menuItem) => menuItem !== id)]);
    };

    return (
        <div>
            <div className="mx-auto gap-8 px-8 pt-8 sm:flex sm:pt-16">
                <Add
                    config={CONFIG.filter((item) => menu.includes(item.id))}
                    showCard={showCard}
                />
            </div>
            <div className="mx-auto gap-8 p-8 sm:flex sm:py-16">
                {cards.length ? (
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
                    })
                ) : (
                    <p>No Cards Left</p>
                )}
            </div>
        </div>
    );
}
