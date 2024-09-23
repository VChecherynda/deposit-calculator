import { Input as InputCore } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';

export const Input = ({
    label,
    value,
    errors,
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
        <div className="mb-4">
            <Label htmlFor="picture">{label}</Label>
            <InputCore value={value} onChange={onChange} />
            {errors?.name && (
                <span className="text-sm text-red-500">
                    This field is required
                </span>
            )}
        </div>
    );
};
