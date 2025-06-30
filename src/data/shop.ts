export interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number; // in USD, as cents
  images: string[]; // URLs
  variants: { id: string; name: string; stock: number }[];
  tags: string[];
}

export const products: Product[] = [
  {
    id: 1,
    slug: "acme-widget",
    name: "Acme Widget",
    description:
      "Our signature widget – reliable, efficient, and built to last. Perfect for everyday tasks.",
    price: 1999,
    images: [
      "https://images.unsplash.com/photo-1619462572411-f1377274cab4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1619462572411-f1377274cab4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    variants: [
      { id: "1a", name: "Red", stock: 10 },
      { id: "1b", name: "Blue", stock: 5 },
    ],
    tags: ["widget", "tools"],
  },
  {
    id: 2,
    slug: "rocket-tool",
    name: "Rocket Tool",
    description:
      "A powerful multi-tool designed for professionals. Includes screwdriver, pliers, and more.",
    price: 2999,
    images: [
      "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1908&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    variants: [
      { id: "2a", name: "Standard", stock: 3 },
      { id: "2b", name: "Pro", stock: 2 },
    ],
    tags: ["tool", "professional"],
  },
  {
    id: 3,
    slug: "gadget-pro",
    name: "Gadget Pro",
    description:
      "High-tech gadget with smart capabilities and sleek design. Ideal for tech enthusiasts.",
    price: 3999,
    images: [
      "https://images.unsplash.com/photo-1413708617479-50918bc877eb?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    variants: [{ id: "3a", name: "Default", stock: 15 }],
    tags: ["gadget", "tech"],
  },
  {
    id: 4,
    slug: "super-gizmo",
    name: "Super Gizmo",
    description:
      "Compact, powerful gizmo for everyday convenience. Pocket-sized perfection.",
    price: 2499,
    images: [
      "https://images.unsplash.com/photo-1665885945839-74649e791586?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1675627453075-0f170b02186a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    variants: [{ id: "4a", name: "Black", stock: 20 }],
    tags: ["gizmo", "convenience"],
  },
];
