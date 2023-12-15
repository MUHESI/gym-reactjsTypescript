
import ListCommand from "@/pages/ListCommand";
import Home from "@/pages/home";
import Shop from "@/pages/shop";
import { Route, Routes } from "react-router-dom";

function GlobalRoutes() {
  return (
    <div className="bg-white rounded-lg">
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home setSelectedPage={(e: any) => console.log("cool")} />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/list-command" element={<ListCommand />} />
      </Routes>
    </div>
  );
}

export default GlobalRoutes;
