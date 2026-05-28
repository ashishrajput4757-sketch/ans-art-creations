import "../styles/loader.css";

function PageLoader() {

  return (

    <div className="page-loader">

      <video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="loader-video"
>

  <source
    src="/loader.webm"
    type="video/mp4"
  />

</video>
    </div>

  );
}

export default PageLoader;