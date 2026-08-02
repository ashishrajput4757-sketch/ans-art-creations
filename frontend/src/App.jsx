import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import useModal from "./hooks/useModal";

import Layout from "./layout/Layout";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import EcoSection from "./components/EcoSection/EcoSection";
import Customization from "./components/Customization/Customization";
import SignatureCollections from "./components/SignatureCollections/SignatureCollections";
import Gallery from "./components/Gallery/Gallery";
import Testimonials from "./components/Testimonials/Testimonials";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import QuickViewModal from "./components/QuickViewModal/QuickViewModal";
import PageLoader from "./components/PageLoader/PageLoader";

function App() {
  const [loading, setLoading] = useState(true);

  const { modalData, openModal, closeModal } = useModal();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <PageLoader key={Date.now()} />}

      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 0.7s ease",
        }}
      >
        <Layout>
          <Header />

          <main>
            <Hero />

            <Categories onOpenModal={openModal} />

            <EcoSection onOpenModal={openModal} />

            <Customization />

            <SignatureCollections />

            <Gallery onOpenModal={openModal} />

            <Testimonials />

            <About />

            <Contact />
          </main>

          <Footer />

          {/* Shared Quick View Modal */}
          <QuickViewModal
            data={modalData}
            onClose={closeModal}
          />

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919318330081"
            target="_blank"
            rel="noreferrer"
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              background: "#25D366",
              color: "#fff",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              textDecoration: "none",
              fontSize: "40px",
              zIndex: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 25px rgba(37,211,102,0.4)",
            }}
          >
            <FaWhatsapp />
          </a>
        </Layout>
      </div>
    </>
  );
}

export default App;