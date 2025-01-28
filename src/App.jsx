import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <main className="mt-[80px] md:mt-[84px] lg:mt-[92px]">
        {location.pathname === "/" && <Hero />}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
