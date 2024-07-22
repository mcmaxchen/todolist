import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Update from "../pages/update";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
