import { Mail, User, Lock, X } from "lucide-react";
import { useAppContext } from "../../contexts/AppContext";

const Signup = () => {
  // app context.
  const { setFormType , toggleAuthModal } = useAppContext();
  return (
    <div className="w-full h-screen flex-center absolute top-0 left-0 z-100 bg-black/50">
      <div className="bg-white rounded-lg p-8 max-w-xl w-full">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-bold text-3xl">
              Create <span>An Account</span>
            </h1>
            <p className="text-gray-400 font-normal">
              Get Started in Just a Few Steps
            </p>
          </div>
          <X className="cursor-pointer" onClick={() => toggleAuthModal()} />
        </div>
        <form action="">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm text-gray-700 font-semibold"
            >
              Username
            </label>
            <div className="w-full relative">
              <input
                type="text"
                id="username"
                name="username"
                required
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
            <div className="w-full relative">
              <input
                type="email"
                id="email"
                name="email"
                required
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
                type="password"
                id="password"
                name="password"
                required
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
            Already have an account?{" "}
            <a
              className="text-accent hover:underline cursor-pointer"
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
