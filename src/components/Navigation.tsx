import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: 'https://github.com/vercel/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
];

const Navigation: React.FC = () => {
  return (
    <nav className="p-8">
      <ul className="flex items-center justify-between">
        <li>
          <Link
            href="/"
            className="text-accent-1 text-blue-500 no-underline dark:text-blue-300"
          >
            Home
          </Link>
        </li>
        <li>
          <ul className="flex items-center justify-between space-x-4">
            <li>
              <ThemeToggle />
            </li>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <a
                  href={href}
                  className="btn-blue no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
