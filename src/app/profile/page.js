"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function ProfilePage() {
  const session = useSession();
  const { status } = session;
  if (status === "loading") {
    return "Loading...";
  }
  if (status === "unauthenticated") return redirect("/login");
  return (
    <section>
      <h1 className="text-center text-primary text-4xl mt-4 mb-4">Profile</h1>
      <form className="max-w-xs mx-auto border">
        <div></div>
      </form>
    </section>
  );
}

export default ProfilePage;
