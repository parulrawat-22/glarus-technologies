import "./style.css";

import React, { useState, useEffect } from "react";

const ImageBanner = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % props.images.length);
    }, props.interval);

    return () => clearInterval(timer);
  }, [currentIndex, props.images.length, props.interval]);

  return (
    <div className="image-banner">
      {props.images.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Banner Image ${index}`}
          className={index === currentIndex ? "active" : ""}
        />
      ))}
    </div>
  );
};

export default ImageBanner;
