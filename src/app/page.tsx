import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

import GithubButton from "@/components/buttons/GithubButton";

export default async function Home() {
  const session = (await getServerSession()) || {};
  if (Object.keys(session).length !== 0) {
    redirect("/playground");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-8 lg:p-24">
      <GithubButton />
    </main>
  );
}
