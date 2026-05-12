import Navbar from "../components/Navbar";

function Layout({ children }) {
  return (
    <>
      {/* GLOBAL NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="main-content">
        {children}
      </main>

      {/* FUTURE: FOOTER */}
    </>
  );
}

export default Layout;