'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { IoAlertCircle, IoHome, IoRefresh } from 'react-icons/io5';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log error to error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-lightbg p-4 dark:bg-darkbg">
      <div className="max-w-md w-full text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
            <IoAlertCircle className="text-4xl text-red-600 dark:text-red-400" />
          </div>
        </div>
        
        <h1 className="mb-4 text-3xl font-bold text-lightPrimarytext dark:text-white">
          Something went wrong!
        </h1>
        
        <p className="mb-8 text-lightSecondarytext dark:text-darkPrimaryGray">
          We encountered an unexpected error. Please try again or return to the home page.
        </p>

        {error?.message && (
          <div className="mb-6 rounded-lg bg-red-50 p-4 text-left dark:bg-red-900/10">
            <p className="text-sm font-mono text-red-800 dark:text-red-300">
              {error.message}
            </p>
          </div>
        )}

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-SkyBlue px-6 py-3 font-semibold text-white transition-colors hover:bg-opacity-90"
            aria-label="Try again"
          >
            <IoRefresh className="text-lg" />
            Try Again
          </button>
          
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-SkyBlue px-6 py-3 font-semibold text-SkyBlue transition-colors hover:bg-SkyBlue hover:text-white"
            aria-label="Go to home page"
          >
            <IoHome className="text-lg" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
