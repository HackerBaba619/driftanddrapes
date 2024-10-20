// app/login/page.tsx
'use client';
import React from "react";
import { signIn } from "next-auth/react";

const LoginPage: React.FC = () => {
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;

    await signIn("credentials", { username, password, redirect: false });
    // Optionally, handle errors here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div>
          <label htmlFor="username" className="block mb-1">Username</label>
          <input type="text" name="username" required className="border rounded w-full p-2" />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="block mb-1">Password</label>
          <input type="password" name="password" required className="border rounded w-full p-2" />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
