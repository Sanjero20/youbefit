import { BrowserRouter, Routes, Route } from "react-router";
// Layouts
import MainLayout from "@/layouts/main-layout";
// Pages

import { Home } from "@/pages/home";
import { Assessment } from "@/pages/assessment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="assessment" element={<Assessment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
