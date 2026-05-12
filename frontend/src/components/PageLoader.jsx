import "../styles/loader.css";

function PageLoader() {

  return (

    <div className="page-loader">

      <video
        autoPlay
        muted
        playsInline
        className="loader-video"
      >

        <source
          src="/loader.mp4"
          type="video/mp4"
        />

      </video>

    </div>

  );
}

export default PageLoader;