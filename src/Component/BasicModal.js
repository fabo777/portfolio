import React, { useState, useEffect, useRef } from "react";
import "./styles/BasicModal.css";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function BasicModal({ open, handleClose, getID, myProjects }) {
  const [activeIndex, setActiveIndex] = useState(getID);
  const splideRef = useRef(null);
  console.log(activeIndex);
  useEffect(() => {
    setActiveIndex(getID);
  }, [getID]);

  useEffect(() => {
    if (splideRef.current) {
      splideRef.current.go(activeIndex);
    }
  }, [activeIndex]);

  const handleSlideChange = (splide) => {
    setActiveIndex(splide.index);
  };

  return (
    <Dialog
      visible={open}
      style={{ width: "50vw", maxHeight: "85vh" }}
      onHide={handleClose}
    >
      <div className="fakeHeaderOuter">
        <h2 className="fakeHeader">
          {myProjects[activeIndex]?.name || "Loading..."}
        </h2>
      </div>
      <div className="centerSlider">
        <Splide
          ref={splideRef}
          options={{
            rewind: true,
            arrows: true,
            pagination: true,
            autoplay: false,
            start: activeIndex,
            updateOnMove: true,
          }}
          aria-label="Project Images"
          onMove={handleSlideChange}
        >
          {myProjects.map((project, index) => (
            <SplideSlide key={index}>
              <img
                src={`images/projects/${project.name}-FULL.PNG`}
                alt={`Project ${index + 1}`}
                className="sliderImage"
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="modalBtns">
        {myProjects[activeIndex]?.link && (
          <Button
            severity="secondary"
            style={{ backgroundColor: "black" }}
            onClick={() => window.open(`${myProjects[activeIndex].link}`)}
          >
            View in action
          </Button>
        )}
        {myProjects[activeIndex]?.srcCode && (
          <Button
            severity="secondary"
            style={{ backgroundColor: "black" }}
            onClick={() => window.open(`${myProjects[activeIndex].srcCode}`)}
          >
            View source code
          </Button>
        )}
      </div>
    </Dialog>
  );
}
