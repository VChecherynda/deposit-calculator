import { Link } from '@/components';

export default function About() {
    return (
        <div className="mx-auto w-full p-8 sm:w-1/2 sm:py-16">
            <h1 className="mb-8 text-4xl font-bold">About Author:</h1>

            <p className="mb-4">
                Hello I am software developer who intersted as in Front-end and
                in Back-end development.
            </p>

            <p className="mb-4">
                This project is my journey to become a full-stack engineer and
                understand all process which I need to know.
            </p>

            <p>
                You could find code for this simple app on the
                <Link
                    className="mx-2 text-base underline"
                    href="https://github.com/VChecherynda/deposit-calculator"
                    name="GitHub."
                />
                Please comment it and any useful suggestion how to improve it.
            </p>
        </div>
    );
}
