export default async function RecommendationsPanel() {
  // Simulate server delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const recs = ["Gadget Pro", "Super Gizmo", "Turbo Charger"];
  return (
    <ul className="space-y-2">
      {recs.map((name) => (
        <li key={name} className="text-gray-700">
          • {name}
        </li>
      ))}
    </ul>
  );
}
