import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import Home from "./pages/Home";
import SubCategory from "./pages/SubCategory";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import PageLoader from "./components/PageLoader";

function App() {

  const location = useLocation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setLoading(true);

    const timer = setTimeout(() => {

      setLoading(false);

    }, 3000);

    return () => clearTimeout(timer);

  }, [location.pathname]);

  return (

  <>

    {loading && <PageLoader />}

    <div
      style={{
        opacity: loading ? 0 : 1,
        transition: "opacity 0.7s ease"
      }}
    >

      <Layout>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/category/:id"
            element={<SubCategory />}
          />

          <Route
            path="/products"
            element={<ProductList />}
          />

          <Route
            path="/about"
            element={<About />}
          />

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

    </div>

  </>
);
}

export default App;