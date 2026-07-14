import { Link } from "react-router-dom";
import useLoginForm from "../../hooks/useLoginForm";

export default function Login() {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
  } = useLoginForm();

  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-8">
        Welcome Back
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >

        <div>
          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            {...register("password")}
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
        >
          Login
        </button>

      </form>

      <p className="text-center mt-6">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-blue-600 font-semibold"
        >
          Register
        </Link>
      </p>
    </>
  );
}