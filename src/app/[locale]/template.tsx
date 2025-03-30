import { Header } from "@/common";
import { PropsWithChildren } from "react";

export default function Template({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <>{children}</>
    </>
  );
}
