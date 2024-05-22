import Navigation from 'components/Navigation';
import Logo from 'components/Logo';

const Link = ({
  href,
  title,
  subtitle,
}: {
  href: string;
  title: string;
  subtitle: string;
}) => (
  <a
    href={href}
    className="w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600 dark:border-gray-800 dark:text-gray-100 dark:hover:text-blue-300 dark:focus:text-blue-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    <h3 className="text-2xl font-bold">{title} &rarr;</h3>
    <p className="mt-4 text-xl">{subtitle}</p>
  </a>
);

const Home = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-stretch justify-center">
        <Navigation />

        <main className="flex flex-1 flex-col items-center justify-center px-20 text-center">
          <h1 className="text-center text-5xl font-bold text-gray-700 dark:text-gray-100">
            Welcome to{' '}
            <a className="text-blue-600" href="https://nextjs.org">
              Next.js!
            </a>
            {' + '}
            <a className="text-blue-600" href="https://tailwindcss.com/">
              Tailwind CSS 2.0
            </a>
          </h1>

          <p className="mt-3 text-2xl dark:text-gray-100">
            Get started by editing{' '}
            <code className="rounded-md bg-gray-100 p-3 font-mono text-lg dark:text-gray-800">
              pages/index.js
            </code>
          </p>

          <div className="my-12 flex max-w-4xl flex-col items-center justify-around space-y-6 sm:w-full">
            <Link
              href="https://nextjs.org/docs"
              title="Documentation"
              subtitle="Find in-depth information about Next.js features and API."
            />
            <Link
              href="https://nextjs.org/learn"
              title="Learn"
              subtitle="Learn about Next.js in an interactive course with quizzes!"
            />

            <Link
              href="https://github.com/vercel/next.js/tree/master/examples"
              title="Examples"
              subtitle="Discover and deploy boilerplate example Next.js projects."
            />

            <Link
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              title="Deploy"
              subtitle="Instantly deploy your Next.js site to a public URL with Vercel."
            />
          </div>
        </main>

        <footer className="flex h-24 w-full items-center justify-center border-t dark:border-gray-700 dark:text-gray-100">
          <a
            className="flex items-center justify-center text-white"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <Logo className="ml-2 h-4" />
          </a>
        </footer>
      </div>
    </>
  );
};

export default Home;
