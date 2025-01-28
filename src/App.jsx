import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <main className="mt-[81px] md:mt-[85px] lg:mt-[93px]">
        {location.pathname === "/" && <Hero />}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
