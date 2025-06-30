export default async function CartPanel() {
  // Simulate server delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const items = [{ id: 1, name: "Acme Widget", qty: 2, price: "$19.99" }];

  return (
    <ul className="space-y-2">
      {items.length > 0 ? (
        items.map((item) => (
          <li key={item.id} className="flex justify-between">
            <span>
              {item.name} ×{item.qty}
            </span>
            <span>{item.price}</span>
          </li>
        ))
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}
    </ul>
  );
}
