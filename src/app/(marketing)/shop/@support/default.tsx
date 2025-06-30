import Link from "next/link";

export default function SupportDefault() {
  return (
    <p className="text-gray-600">
      Need help? Visit our <Link href="/shop/faq" className="text-blue-600 hover:underline font-medium">FAQ</Link> or contact support.
    </p>
  );
}
