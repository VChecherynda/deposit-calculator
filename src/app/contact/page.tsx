'use client';

import { Link, LinkIcon } from '@/shared/ui';

export default function Contact() {
    return (
        <main className="mx-auto min-h-screen w-1/2 p-24">
            <h1 className="mb-8 text-4xl font-bold">My contacts</h1>

            <div className="mb-6 flex">
                <LinkIcon
                    className="mr-4 text-4xl"
                    href="https://www.facebook.com/profile.php?id=100001214651168"
                    icon="BsFacebook"
                    color="black"
                />

                <LinkIcon
                    className="mr-4 text-4xl"
                    href="https://www.facebook.com/profile.php?id=100001214651168"
                    icon="BsLinkedin"
                    color="black"
                />
            </div>

            <div className="mb-6 flex">
                <p>Or email:</p>

                <Link
                    className="mx-2 text-base underline"
                    href="mailto:checherinda.vadym@gmail.com"
                    name="checherinda.vadym@gmail.com"
                />
            </div>
        </main>
    );
}
