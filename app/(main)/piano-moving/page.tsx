import { redirect } from "next/navigation";

export default function PianoMovingRedirect() {
  redirect("/residential-moving/");
}

export const metadata = {
  robots: "noindex",
};
