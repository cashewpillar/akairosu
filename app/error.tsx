"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error,
  reset: () => void,
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col place-content-center h-full p-4">
      <div className="grid place-content-center gap-4">
        <div className="text-xl">Something went wrong!</div>
        <button
          className="transition-colors bg-transparent hover:bg-akairosu-brown text-zinc-900 dark:text-akairosu-white font-semibold hover:text-akairosu-white py-2 px-4 border border-zinc-900 dark:border-akairosu-white dark:hover:border-none rounded"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </main>
  );
}
