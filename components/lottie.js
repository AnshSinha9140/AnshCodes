import React from "react";
import Lottie from "react-lottie";

export default function LottieAnimation({ lottie, height, width }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie,
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
}
