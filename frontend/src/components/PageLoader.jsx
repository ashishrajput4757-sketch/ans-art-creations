import "../styles/loader.css";

function PageLoader() {

  return (

    <div className="page-loader">

 <img
  playsInline
  preload="auto"
  src="/Loader.svg"
  alt="Loading..."
  className="loader-svg"
/>
    </div>

  );
}

export default PageLoader;