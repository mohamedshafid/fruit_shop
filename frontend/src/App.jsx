import SignIn from "./components/(auth)/Signin";
import Signup from "./components/(auth)/Signup";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { useAppContext } from "./contexts/AppContext";

const App = () => {
  // app context.
  const { isAuthModalOpen, formType } = useAppContext();

  return (
    <>
      {isAuthModalOpen && formType === "signin" && <SignIn />}
      {isAuthModalOpen && formType === "signup" && <Signup />}
      <Navbar />

      <div className="relative px-2 py-5 sm:px-6 md:px-10 lg:px-16">
        <Hero />
      </div>
    </>
  );
};

export default App;
