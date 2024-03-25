import React from "react";

const Zoom = () => {
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left - window.pageXOffset) / width) * 100;
    const y = ((e.pageY - top - window.pageYOffset) / height) * 100;

    node.figure.style.backgroundPosition = `${x}% ${y}%`;
  };

  const prev = {
    backgroundImage: `url(${window.location.origin}/static/media/images/DefaultBackground.jpg)`,
    backgroundPosition: "0% 0%",
    backgroundSize: "160%",
  };

  return (
    <>
      <figure
        id="prev-fig"
        onMouseMove={(e) => handleMouseMove(e)}
        style={prev}
      ></figure>
    </>
  );
};

export default Zoom;
