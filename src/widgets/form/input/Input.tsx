import { Input as InputCore } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';

export const Input = ({
    label,
    value,
    onChange,
}: {
    label: string;
    name: string;
    value: string | number;
    errors?: {
        name: string;
    };
    onChange: (params: any) => void;
}) => {
    return (
        <div className="] mb-4 w-full">
            <Label htmlFor="picture">{label}</Label>
            <InputCore value={value} onChange={onChange} />
        </div>
    );
};
