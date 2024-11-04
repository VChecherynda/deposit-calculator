import { Input as InputCore } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const Input = ({
    label,
    value,
    disabled = false,
    onChange,
}: {
    label: string;
    name: string;
    value: string | number;
    disabled?: boolean;
    errors?: {
        name: string;
    };
    onChange: (params: any) => void;
}) => {
    return (
        <div className="] mb-4 w-full">
            <Label htmlFor="picture">{label}</Label>
            <InputCore value={value} disabled={disabled} onChange={onChange} />
        </div>
    );
};
