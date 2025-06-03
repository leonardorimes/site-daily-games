import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return <div className="w-full mx-auto px-3">{children}</div>;
}
