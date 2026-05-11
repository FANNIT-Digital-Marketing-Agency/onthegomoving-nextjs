import { redirect } from "next/navigation";

export default function MovingSuppliesRedirect() {
  redirect("/packing-services/");
}

export const metadata = {
  robots: "noindex",
};
