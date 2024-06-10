import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { authOption } from "../utils/auth";
import { redirect } from "next/navigation";
import Navbar from "../components/Navbar";

export default async function HomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOption);

  if (!session) {
    return redirect("/login");
  }

  return (
    <>
      <Navbar />
      <main className="w-full max-w-9xl mx-auto sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
}