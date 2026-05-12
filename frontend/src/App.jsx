import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import Home from "./pages/Home";
import SubCategory from "./pages/SubCategory";
import ProductList from "./pages/ProductList";
import About from "./pages/About";

function App() {
  return (
    <Layout>  {/* 🔥 GLOBAL LAYOUT */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<SubCategory />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/918377052049"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#25D366",
          color: "#fff",
          padding: "15px",
          borderRadius: "50%",
          textDecoration: "none",
          fontSize: "20px",
          zIndex: 999
        }}
      >
        💬
      </a>

    </Layout>
  );
}

export default App;