'use client';

import { Link, LinkIcon } from '@/components';

export default function Contact() {
    return (
        <div className="mx-auto w-full p-8 sm:w-1/2 sm:p-16">
            <h1 className="mb-8 text-4xl font-bold">My contacts:</h1>

            <div className="mb-4 flex">
                <LinkIcon
                    className="mr-2 text-4xl"
                    href="https://www.facebook.com/profile.php?id=100001214651168"
                    icon="facebook"
                    color="black"
                />

                <LinkIcon
                    className="mr-2 text-4xl"
                    href="https://www.facebook.com/profile.php?id=100001214651168"
                    icon="linkedin"
                    color="black"
                />
            </div>

            <div className="mb-4 flex">
                <p>Or email:</p>

                <Link
                    className="mx-2 text-base underline"
                    href="mailto:checherinda.vadym@gmail.com"
                    name="checherinda.vadym@gmail.com"
                />
            </div>
        </div>
    );
}
