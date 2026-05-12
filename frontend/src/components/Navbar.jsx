import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import "../styles/navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);


  const navigate = useNavigate();

  useEffect(() => {
    API.get("/category/main")
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      // 🔥 glass effect
      if (current > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // 🔥 hide/show
      if (current > lastScroll && current > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  
  return (
    <>
      {/* NAVBAR */}
      <header
      className={`navbar 
        ${visible ? "show" : "hide"} 
        ${scrolled ? "scrolled" : ""}`}
      >
        <div className="navbar-inner">

          {/* HAMBURGER */}
          <div className="menu-icon" onClick={() => setOpen(true)}>
            ☰
          </div>

          <a href="/" className="navbar-logo">
          <img
          src="/logo (2).svg"
          alt="Logo"
          />
          <h1>AACREATIONS </h1>
          </a>


          {/* DESKTOP MENU */}
          <nav className="nav-center">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>

            {/* PRODUCTS */}
            <div className="dropdown">
              <span className="nav-link">Products ▾</span>
              <div className="dropdown-menu">
                <Link to="/products">Product List</Link>
                <Link to="/product-details">Product Details</Link>
              </div>
            </div>

            {/* CATEGORIES */}
            <div className="dropdown">
              <span className="nav-link">Categories ▾</span>
              <div className="dropdown-menu">
                {categories.map(cat => (
                  <div
                    key={cat._id}
                    className="dropdown-item"
                    onClick={() => navigate(`/category/${cat._id}`)}
                  >
                    {cat.name}
                  </div>
                ))}
              </div>
            </div>

            <Link to="/contact">Contact</Link>
          </nav>

          {/* RIGHT ICONS */}
          <a
            href="https://wa.me/919318330081"
            target="_blank"
            rel="noreferrer"
            className="enquiry-btn"
          >

  Enquiry Now

</a>

        </div>
      </header>

      {/* SIDEBAR */}
      <div className={`sidebar ${open ? "active" : ""}`}>
        
        <div className="close-btn" onClick={() => setOpen(false)}>✖</div>

        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>

        {/* PRODUCTS */}
        <div className="sidebar-dropdown">
          <div
            className="sidebar-title"
            onClick={() => setProductOpen(!productOpen)}
          >
            Products ▾
          </div>

          {productOpen && (
            <div className="sidebar-submenu">
              <Link to="/products" onClick={() => setOpen(false)}>
                Product List
              </Link>
              <Link to="/product-details" onClick={() => setOpen(false)}>
                Product Details
              </Link>
            </div>
          )}
        </div>

        {/* CATEGORIES */}
        <div className="sidebar-dropdown">
          <div
            className="sidebar-title"
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            Categories ▾
          </div>

          {categoryOpen && (
            <div className="sidebar-submenu">
              {categories.map(cat => (
                <div
                  key={cat._id}
                  className="sidebar-link"
                  onClick={() => {
                    navigate(`/category/${cat._id}`);
                    setOpen(false);
                  }}
                >
                  {cat.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

      </div>
    </>
  );
}

export default Navbar;