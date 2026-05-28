import "../styles/loader.css";

function PageLoader() {

  return (

    <div className="page-loader">

      <video
  autoPlay
  muted
  loop
  playsInline
  webkit-playsinline="true"
  preload="auto"
  className="loader-video"
>

  <source
    src="/loader (2).mp4"
    type="video/mp4"
  />

</video>
    </div>

  );
}

export default PageLoader;