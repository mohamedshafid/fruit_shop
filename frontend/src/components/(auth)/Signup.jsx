import { Mail, User, Lock, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAppContext } from "../../contexts/AppContext";

const Signup = () => {
  // this is for the zod schema.
  const signUpSchema = z.object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters long.")
      .max(20, "Username must be at most 20 characters long.")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores."
      ),

    email: z
      .string()
      .email("Please enter a valid email address.")
      .regex(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Email must be a valid email address."
      ),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters long.")
      .max(50, "Password must be at most 50 characters long."),
  });

  // Using react-hook-form for form handling
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  // app context.
  const { setFormType, toggleAuthModal } = useAppContext();

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      console.log("Form submitted:", data);
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-black/50 z-100 flex-center">
      <div className="w-full max-w-xl p-8 bg-white rounded-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">
              Create <span>An Account</span>
            </h1>
            <p className="text-gray-400 font-normal">
              Get Started in Just a Few Steps
            </p>
          </div>
          <X className="cursor-pointer" onClick={() => toggleAuthModal()} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-700"
            >
              Username
            </label>
            <div className="relative w-full">
              <input
                {...register("username")}
                type="text"
                name="username"
                className="input"
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <User />
              </span>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email
            </label>
            <div className="relative w-full">
              <input
                {...register("email")}
                type="email"
                name="email"
                className="input"
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail />
              </span>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700"
            >
              Password
            </label>
            <div className="relative w-full">
              <input
                {...register("password")}
                type="password"
                name="password"
                className="input"
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock />
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-accent rounded-md"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a
              className="cursor-pointer text-accent hover:underline"
              onClick={() => setFormType("signin")}
            >
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
