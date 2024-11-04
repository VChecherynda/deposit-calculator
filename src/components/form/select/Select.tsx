import {
    Select as SelectCore,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Input as InputCore } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';

export const Select = ({
    label,
    value,
    loading,
    options,
    onChange,
}: {
    label: string;
    name: string;
    value: string;
    loading: boolean;
    options: { key: string; value: string }[];
    onChange?: (params: any) => void;
}) => {
    return (
        <div className="mb-4 w-full">
            <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {label}
            </Label>
            {loading ? (
                <InputCore defaultValue="Loading..." />
            ) : (
                <SelectCore value={value} onValueChange={onChange}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder={'Select a currency'} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
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
            )}
        </div>
    );
};
