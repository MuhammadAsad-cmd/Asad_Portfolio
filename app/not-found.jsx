import Link from 'next/link';
import { IoHome, IoSearchOutline } from 'react-icons/io5';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-lightbg p-4 dark:bg-darkbg">
      <div className="max-w-md w-full text-center">
        <div className="mb-6">
          <h1 className="text-9xl font-black text-SkyBlue/20 dark:text-SkyBlue/10">
            404
          </h1>
        </div>
        
        <h2 className="mb-4 text-3xl font-bold text-lightPrimarytext dark:text-white">
          Page Not Found
        </h2>
        
        <p className="mb-8 text-lightSecondarytext dark:text-darkPrimaryGray">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-SkyBlue px-6 py-3 font-semibold text-white transition-colors hover:bg-opacity-90"
            aria-label="Go to home page"
          >
            <IoHome className="text-lg" />
            Go Home
          </Link>
          
          <Link
            href="/details/projects"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-SkyBlue px-6 py-3 font-semibold text-SkyBlue transition-colors hover:bg-SkyBlue hover:text-white"
            aria-label="View projects"
          >
            <IoSearchOutline className="text-lg" />
            View Projects
          </Link>
        </div>

        <div className="mt-12 space-y-2 text-sm text-lightSecondarytext dark:text-darkPrimaryGray">
          <p>You might be looking for:</p>
          <ul className="flex flex-wrap justify-center gap-4">
            <li>
              <Link href="/" className="hover:text-SkyBlue hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/details/projects" className="hover:text-SkyBlue hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/details/services" className="hover:text-SkyBlue hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/details/experience" className="hover:text-SkyBlue hover:underline">
                Experience
              </Link>
            </li>
            <li>
              <Link href="/details/skills" className="hover:text-SkyBlue hover:underline">
                Skills
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
