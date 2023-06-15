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
    <div className="flex flex-col space-y-4">
      <h2>Something went wrong!</h2>
      <button
        className="bg-transparent transition-colors hover:bg-neutral-800/30 text-black font-semibold hover:text-white py-2 px-4 border border-black rounded"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
