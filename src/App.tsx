import { BrowserRouter, Routes, Route } from "react-router";
// Layouts
import MainLayout from "@/layouts/main-layout";
// Pages

import { Home } from "@/pages/home";
import { Assessment } from "@/pages/assessment";
import { About } from "@/pages/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="assessment" element={<Assessment />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
