import { useState } from "react";
import "../styles/product.css";

function ProductList() {
  const [catOpen, setCatOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);

  return (
    <div className="product-page">

      {/* BANNER */}
      <div className="product-banner">
        <h1>Product List</h1>
      </div>

      <div className="product-container">

        {/* FILTER */}
        <div className="filter-section">

          {/* SEARCH */}
          <div className="search-box">
            <input type="text" placeholder="Search keyword" />
            <span>🔍</span>
          </div>

          {/* CATEGORY */}
          <div className="filter-item">
            <div
              className="filter-title"
              onClick={() => setCatOpen(!catOpen)}
            >
              Category ▾
            </div>

            {catOpen && (
              <div className="filter-dropdown">
                <p>Office Essentials</p>
                <p>Stationary/Office Supplies</p>
                <p>Desktop Items</p>
                <p>Gift Items</p>
                <p>Drinkware</p>
                <p>Clothing</p>
                <p>Spiritual Essentials</p>
              </div>
            )}
          </div>

          {/* TYPE */}
          <div className="filter-item">
            <div
              className="filter-title"
              onClick={() => setTypeOpen(!typeOpen)}
            >
              Type ▾
            </div>

            {typeOpen && (
              <div className="filter-dropdown">
                <p>New</p>
                <p>Popular</p>
                <p>Trending</p>
              </div>
            )}
          </div>

        </div>

        {/* PRODUCTS */}
        <div className="product-grid">

          <div className="product-card">
            <img src="/products/p1.jpg" />
            <h3>Sprial Notebook</h3>
            <p>A4 size</p>
          </div>

          <div className="product-card">
            <img src="/products/p2.jpg" />
            <h3></h3>
            <p></p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductList;