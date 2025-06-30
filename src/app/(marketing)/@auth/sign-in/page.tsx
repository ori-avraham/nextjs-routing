'use client';

import { useRouter } from "next/navigation";

export default function LoginModal() {
  const router = useRouter();

  // Handle overlay click (only if the user clicks directly on the backdrop)
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      router.back(); // closes the modal
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div
        className="bg-white rounded p-6 shadow-md w-full max-w-sm"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from bubbling
      >
        <h2 className="text-lg font-bold mb-4">Sign In</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Logged in!");
            router.back(); // close after fake login
          }}
        >
          <input
            type="email"
            placeholder="Email"
            className="border px-3 py-2 w-full mb-3"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border px-3 py-2 w-full mb-4"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Sign in
          </button>
        </form>

        <button
          onClick={() => router.back()}
          className="text-sm text-gray-500 hover:underline mt-3 block mx-auto"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
