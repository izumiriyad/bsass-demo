import type { Metadata } from "next";
import { PopularPage } from "@/components/bj88/category-pages";

export const metadata: Metadata = {
  title: "Popular Games",
};

export default function Page() {
  return <PopularPage />;
}
