import { Title } from '@/components/ui';
import { Link, LinkButton } from '@/components/ui';

export default function Home() {
    return (
        <main className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="text-center">
                    <Title title="Future income" />
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        In this simple app, I`ll try to help you and me to
                        calculate your income. You basically add how much money
                        your could save and how many do you need.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <LinkButton href="/calculator" name="Get started" />
                        <Link
                            href="/about"
                            name={
                                <>
                                    Learn more <span aria-hidden="true">→</span>
                                </>
                            }
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
