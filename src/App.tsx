import Navbar from "@/scenes/navbar";
// import Home from "@/scenes/home";
// import OurClasses from "@/scenes/ourClasses";
// import Products from "@/scenes/benefits";
import Footer from "@/scenes/footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import GlobalRoutes from "./routes/routes";
import { Button } from "./components/ui/button";
import Carousel from "./components/core/Carousel";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20 flex flex-col justify-between min-h-screen">
      {/* <Button className="bg-red-400"> Test</Button> */}

      <Navbar

        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="bg-[#f8f4eb] flex-grow mt-6">
        <div className="w-[90%]  mx-auto my-6">
          <GlobalRoutes />
        </div>
      </div>
      {/* <OurClasses setSelectedPage={setSelectedPage} /> */}
      {/* <ContactUs setSelectedPage={setSelectedPage} /> */}
      <Footer />
    </div>
  );
}

export default App;
