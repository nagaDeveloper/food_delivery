"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoginInProgress(true);

      await signIn("credentials", { email, password, callbackUrl: "/" });

      setLoginInProgress(false);
      //   setError(false);
      //   setCreatingUser(true);
      // const response = await fetch("api/login", {
      //   method: "POST",
      //   body: JSON.stringify({ email, password }),
      //   headers: { "Content-Type": "application/json" },
      // });
      //   if (response.ok) {
      //     setCreatedUser(true);
      //     setEmail("");
      //     setPassword("");
      //   } else {
      //     setError(true);
      //   }
      //   setCreatingUser(false);
    } catch (error) {
      // setError(true);
      console.log(error);
    }
  };
  return (
    <>
      <section className="mt-8">
        <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
        <form className="block max-w-xs mx-auto" onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            // disabled={userCreating}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            // disabled={userCreating}
          />
          <button type="submit" disabled={!email || !password}>
            Login
          </button>
          <div className="my-4 text-center text-gray-500">
            Or login with provider
          </div>
          <button>Login with google</button>
          <div className="text-center my-4 text-gray-500 pt-4">
            Existing user?{" "}
            <Link className="underline text-blue-700" href={"/login"}>
              Login here
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}

export default LoginPage;
