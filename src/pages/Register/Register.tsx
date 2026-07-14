import { Link } from "react-router-dom";
import useRegisterForm from "../../hooks/useRegisterForm";

export default function Register() {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
  } = useRegisterForm();

  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-8">
        Create Account
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >

        {/* Full Name */}

        <div>
          <label className="block mb-2 font-medium">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            {...register("fullName")}
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}

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

        {/* Password */}

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
          Register
        </button>

      </form>

      <p className="text-center mt-6">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-blue-600 font-semibold"
        >
          Login
        </Link>
      </p>
    </>
  );
}