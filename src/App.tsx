import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/home/home";
import { MainLayout } from "./layouts/mainlayout";
import { Posters } from "./pages/posters/posters";
import "./App.css";
import { Login } from "./pages/login/login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<div>About</div>} />
            <Route path="/poster" element={<Posters />} />
            <Route path="/contact" element={<div>Contact</div>} />
            <Route path="/login" element={<div>Login</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
