import { redirect } from "next/navigation";

export default function SpecialtyMovingRedirect() {
  redirect("/residential-moving/");
}

export const metadata = {
  robots: "noindex",
};
