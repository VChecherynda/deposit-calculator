import {
    Select as SelectCore,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/shared/ui/select';

export const Select = ({
    label,
    value,
    options,
    onChange,
}: {
    label: string;
    name: string;
    value: string;
    loading: boolean;
    options: { key: string; value: string }[];
    errors?: {
        name: string;
    };
    onChange?: (params: any) => void;
}) => {
    return (
        <div className="mb-4 w-full sm:w-[180px]">
            <SelectCore value={value} onValueChange={onChange}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>{label}</SelectLabel>
                        {options.map((item) => {
                            return (
                                <SelectItem key={item.key} value={item.key}>
                                    {item.value}
                                </SelectItem>
                            );
                        })}
                    </SelectGroup>
                </SelectContent>
            </SelectCore>
        </div>
    );
};
