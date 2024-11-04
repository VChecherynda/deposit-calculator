import { cn } from '@/shared/lib/utils';

export const Facebook = ({ className }: { className: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cn('h-7 w-7 rounded p-1', className)}
            fill="currentColor"
            style={{ background: '#1877f2', color: '#FFFFFF' }}
            viewBox="0 0 24 24"
        >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
    );
};

export const LinkedIn = ({ className }: { className: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cn('h-7 w-7 rounded p-1', className)}
            fill="currentColor"
            style={{ background: '#0077b5', color: '#FFFFFF' }}
            viewBox="0 0 24 24"
        >
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
    );
};
