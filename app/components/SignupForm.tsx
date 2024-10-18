// components/SignupForm.tsx

import { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign up form submitted', formData);

    // Send data to the backend (API integration will come later)
    // await fetch('/api/auth/signup', { ... });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-semibold text-center">Sign Up</h2>

      <label htmlFor="name" className="block text-gray-700 mt-4">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 mt-2 border rounded-md"
      />

      <label htmlFor="email" className="block text-gray-700 mt-4">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 mt-2 border rounded-md"
      />

      <label htmlFor="password" className="block text-gray-700 mt-4">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-2 mt-2 border rounded-md"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-3 mt-4 rounded-md hover:bg-blue-600"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
