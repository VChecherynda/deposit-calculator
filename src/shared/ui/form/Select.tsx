export const Select = ({
    label,
    name,
    value,
    options,
    errors,
    onChange,
}: {
    label: string;
    name: string;
    value: string;
    options: { key: string; value: string }[];
    errors?: {
        name: string;
    };
    onChange?: (params: any) => void;
}) => {
    return (
        <div className="mb-4">
            <label
                htmlFor={name}
                className="block text-sm font-medium text-gray-700"
            >
                {label}
            </label>
            <select
                id={name}
                value={value}
                className={`mt-1 block w-48 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ${
                    errors?.name ? 'border-red-500' : ''
                }`}
                onChange={onChange}
            >
                {options.map((item, index) => {
                    return (
                        <option key={item.key} value={item.key}>
                            {item.value}
                        </option>
                    );
                })}
            </select>
            {errors?.name && (
                <span className="text-sm text-red-500">
                    This field is required
                </span>
            )}
        </div>
    );
};
