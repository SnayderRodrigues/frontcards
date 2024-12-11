import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <main>
        {location.pathname === "/" && <Hero />}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
