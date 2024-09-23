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
    name,
    value,
    loading,
    options,
    errors,
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
        <div className="mb-4">
            <SelectCore value={value} onValueChange={onChange}>
                <SelectTrigger className="w-[180px]">
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
            {/* <label
                htmlFor={name}
                className="block text-sm font-medium text-gray-700"
            >
                {label}
            </label>
            {loading ? (
                <p className="mt-2 block w-48 px-3 py-2 text-sm font-medium text-gray-700">
                    {'Loading...'}
                </p>
            ) : (
                <select
                    id={name}
                    value={value}
                    className={`mt-1 block w-48 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ${
                        errors?.name ? 'border-red-500' : ''
                    }`}
                    onChange={onChange}
                >
                    {options.map((item) => {
                        return (
                            <option key={item.key} value={item.key}>
                                {item.value}
                            </option>
                        );
                    })}
                </select>
            )}

            {errors?.name && (
                <span className="text-sm text-red-500">
                    This field is required
                </span>
            )} */}
        </div>
    );
};
