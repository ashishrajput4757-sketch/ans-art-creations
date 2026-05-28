import "../styles/loader.css";

function PageLoader() {

  return (

    <div className="page-loader">

 <img
  src={`/Loader.svg?v=${Date.now()}`}
  alt="Loading..."
  className="loader-svg"
/>
    </div>

  );
}

export default PageLoader;