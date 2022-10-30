'use client';

import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="bg-red-300 bg-opacity-20 border-2 border-red-600 p-8 rounded-lg flex gap-8 flex-col">
      <p className="text-xl text-white"> {error.message}</p>
      <button className="btn btn-error" onClick={() => reset()}>
        Reset error boundary
      </button>
      <Link className="btn btn-error" href="/">
        Back to home
      </Link>
    </div>
  );
}
