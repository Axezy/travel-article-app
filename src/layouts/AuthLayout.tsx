import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600">
            Travel Articles
          </h1>

          <p className="text-gray-500 mt-2">
            Explore the world through inspiring stories.
          </p>
        </div>

        <Outlet />

      </div>
    </div>
  );
}