export default function ShopLayout({
  children,
  cart,
  recommendations,
  support, // 👈 new slot
}: {
  children: React.ReactNode;
  cart: React.ReactNode;
  recommendations: React.ReactNode;
  support: React.ReactNode;
}) {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-6">
        <main>{children}</main>

        <aside className="space-y-6">
          <section>
            <h2 className="font-semibold text-lg mb-1">Cart</h2>
            {cart}
          </section>
          <section>
            <h2 className="font-semibold text-lg mb-1">Recommendations</h2>
            {recommendations}
          </section>
        </aside>
      </div>

      <section className="mt-6 border-t pt-4">
        <h2 className="font-semibold text-lg mb-2">Support</h2>
        {support}
      </section>
    </div>
  );
}
