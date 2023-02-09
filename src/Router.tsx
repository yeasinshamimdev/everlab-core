import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/components/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
