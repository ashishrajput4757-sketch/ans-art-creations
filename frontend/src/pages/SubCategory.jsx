import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import CategorySection from "../components/CategorySection";

function SubCategory() {
  const { id } = useParams();
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    API.get(`/category/sub/${id}`)
      .then(res => setSubCategories(res.data))
      .catch(err => console.log(err));
  }, [id]);

  return (
  <div>

    {/* BREADCRUMB */}
    <div
      style={{
        maxWidth: "1200px",
        margin: "20px auto",
        padding: "0 20px"
      }}
    >
       <h2 className="section-title">
          Our Products
        </h2>
    </div>

    {/* SUBCATEGORY SLIDER */}
    <div className={'sub-slider ${color}'}>

      {subCategories.length > 0 ? (

        subCategories.map((cat, index) => (

          <CategorySection
            key={cat._id}
            cat={cat}
            index={index}
          />

        ))

      ) : (

        <p
          style={{
            textAlign: "center",
            marginTop: "50px"
          }}
        >
        </p>

      )}

    </div>

  </div>
);
}

export default SubCategory;