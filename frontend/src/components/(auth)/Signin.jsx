import { Mail, Lock, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAppContext } from "../../contexts/AppContext";

const SignIn = () => {
  // this is for the zod schema.
  const signInSchema = z.object({
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
    resolver: zodResolver(signInSchema),
  });

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      console.log("Form submitted:", data);
      reset();
      toggleAuthModal();
      // Here you would typically send the data to your backend for authentication
    } catch (error) {
      console.error("Error during signin:", error);
    }
  };

  // app context.
  const { setFormType, toggleAuthModal } = useAppContext();
  return (
    <div className="w-full h-screen flex-center absolute top-0 left-0 z-100 bg-black/50">
      <div className="bg-white rounded-lg p-8 max-w-xl w-full">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-bold text-3xl">
            Welcome <span>Buddy</span>
          </h1>
          <X className="cursor-pointer" onClick={() => toggleAuthModal()} />
        </div>
        <p className="mb-10 text-gray-400 font-normal">Ready to Get Back In</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email
            </label>
            <div className="w-full relative">
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
            <div className="w-full relative">
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
            className="w-full bg-accent text-white py-2 rounded-md"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a
              className="text-accent hover:underline cursor-pointer"
              onClick={() => setFormType("signup")}
            >
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
