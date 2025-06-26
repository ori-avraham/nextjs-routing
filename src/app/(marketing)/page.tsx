import Image from "next/image";

export default function Home() {
  
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Acme Company</h1>
      <p className="text-gray-700 mb-6">
        Welcome to Acme — your trusted source for innovative tools and gadgets
        that make life easier.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Popular Products
      </h2>
      <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
        <li>Acme Widget</li>
        <li>Rocket Tool</li>
        <li>Gadget Pro</li>
      </ul>
    </>
  );
}
