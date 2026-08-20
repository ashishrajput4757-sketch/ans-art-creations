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
//import Testimonials from "./components/Testimonials/Testimonials";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import QuickViewModal from "./components/QuickViewModal/QuickViewModal";
import PageLoader from "./components/PageLoader/PageLoader";

function App() {
  const [loading, setLoading] = useState(true);
  const { modalData, openModal, closeModal } = useModal();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <PageLoader />}

      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity .7s ease",
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
            {/*<Testimonials />*/}
            <About />
            <Contact />
          </main>

          <Footer />

          <QuickViewModal
            data={modalData}
            onClose={closeModal}
          />

          <a
            href="https://wa.me/919318330081"
            target="_blank"
            rel="noreferrer"
            style={{
              position: "fixed",
              bottom: 20,
              right: 20,
              background: "#25D366",
              color: "#fff",
              width: 60,
              height: 60,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              zIndex: 999,
              textDecoration: "none",
              boxShadow: "0 8px 25px rgba(37,211,102,.4)",
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