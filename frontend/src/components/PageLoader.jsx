import { useEffect, useRef } from "react";

import "../styles/loader.css";

function PageLoader() {

  const videoRef = useRef(null);

  useEffect(() => {

    if (videoRef.current) {

      videoRef.current.play()
        .catch(() => {});
    }

  }, []);

  return (

    <div className="page-loader">

      <video
        ref={videoRef}
        muted
        playsInline
        webkit-playsinline="true"
        preload="auto"
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