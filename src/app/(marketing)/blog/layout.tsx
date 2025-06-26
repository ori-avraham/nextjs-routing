import Breadcrumbs from "@/components/breadcrumbs";
import { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Breadcrumbs />
      {children}
    </>
  );
}
