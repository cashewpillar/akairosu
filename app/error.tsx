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
    <main className="relative h-full grid place-content-center">
      <div>
        <span className="text-2xl pr-4 mr-4 border-e-[1px] border-zinc-400">🐐</span>
        <span className="mr-4">something went wraung!</span>
        <button
          className="w-24 text-sm transition-all rounded-full bg-akairosu-blue hover:bg-akairosu-brown text-akairosu-white"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </main>
  )
}
