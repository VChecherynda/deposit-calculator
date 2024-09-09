import { Input } from '@/shared/ui';
import { Savings } from '@/app/calculator/types/Savings';

export const FormSavings = ({
    values,
    onChange,
}: {
    values: Savings;
    onChange: (e: any) => void;
}) => {
    return (
        <>
            <Input
                label="Your goal per/month"
                name="goal"
                value={values.goal}
                onChange={onChange}
            />
            <Input
                label="Savings per/month"
                name="savings"
                value={values.savings}
                onChange={onChange}
            />
            <Input
                label="Percent (%)"
                name="percent"
                value={values.percent}
                onChange={onChange}
            />
        </>
    );
};
