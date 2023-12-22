
import ListCommand from "@/pages/ListCommand";
import ListProducts from "@/pages/Products";
import DetailVision from "@/pages/detailVision";
import Home from "@/pages/home";
import Shop from "@/pages/shop";
import { Route, Routes } from "react-router-dom";

function GlobalRoutes() {
  return (
    <div className="rounded-lg bg-[#f8f4eb]">
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home setSelectedPage={(e: any) => console.log("cool")} />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/list-command" element={<ListCommand />} />
        <Route path="/products/" element={<ListProducts />} />
        <Route path="/vision/" element={<DetailVision />} />
      </Routes>
    </div>
  );
}

export default GlobalRoutes;
