"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center">

      {/* Google Login */}
      {/* <button
        onClick={() => signIn("google")}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg"
      >
        Login with Google
      </button> */}

      {/* gitHub login  */}
       {/* <button onClick={() => signIn()}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg"
        >Sign in with GitHub</button> */}

      {/* Credential Login (Demo) */}
      <button
        onClick={() =>
          signIn("credentials", {
            email: "test@gmail.com",
            password: "123456",
          })
        }
        className="px-6 py-2 bg-green-600 text-white rounded-lg"
      >
        Login with Credentials
      </button>
    </div>
  );
}
