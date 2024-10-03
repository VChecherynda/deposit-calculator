import React from 'react';
import { Button } from '@/shared/ui';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';

export const Add = ({
    config,
    showCard,
}: {
    config: { id: string; name: string }[];
    showCard: (params: any) => void;
}) => {
    return (
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
    );
};
