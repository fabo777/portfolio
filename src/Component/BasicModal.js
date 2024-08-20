import React, { useState, useEffect } from "react";
import { Dialog } from "primereact/dialog";
import { Galleria } from "primereact/galleria";
import "./styles/BasicModal.css"; // Ensure this file contains necessary styles

const itemTemplate = (item) => {
  return (
    <img
      src={item.itemImageSrc}
      alt={item.alt}
      style={{
        width: "100%",
        height: "auto",
        maxHeight: "calc(80vh - 150px)", // Adjust this value as needed
        objectFit: "contain",
        display: "block",
      }}
    />
  );
};

export default function BasicModal({ open, handleClose, getID, myProjects }) {
  const [activeIndex, setActiveIndex] = useState(getID);

  useEffect(() => {
    setActiveIndex(getID); // Sync activeIndex with getID prop
  }, [getID]);

  const images = myProjects.map((project) => ({
    itemImageSrc: `images/projects/${project.name}-full.PNG`,
    alt: project.name,
  }));

  const header = (
    <div style={{ textAlign: "center", margin: "0", padding: "0" }}>
      {" "}
      {/* Reduced vertical margin */}
      <div>{myProjects[activeIndex].name}</div>
    </div>
  );

  return (
    <Dialog
      header={header}
      visible={open}
      style={{
        width: "90vw",
        maxWidth: "1200px",
        height: "90vh",
        maxHeight: "90vh",
      }}
      onHide={handleClose}
      footer={
        <div className="modalBtns">
          {myProjects[activeIndex].link && (
            <button
              className="modalBtn"
              onClick={() => window.open(`${myProjects[activeIndex].link}`)}
              style={{ margin: "0 5px" }}
            >
              View in action
            </button>
          )}
          {myProjects[activeIndex].srcCode && (
            <button
              className="modalBtn"
              onClick={() => window.open(`${myProjects[activeIndex].srcCode}`)}
              style={{ margin: "0 5px" }}
            >
              View source code
            </button>
          )}
        </div>
      }
    >
      <Galleria
        value={images}
        style={{ width: "100%", height: "calc(100% - 300px)" }} // Adjust height to leave room for footer
        changeItemOnIndicatorHover
        showIndicators
        showThumbnails={false}
        item={itemTemplate}
        activeIndex={activeIndex}
        onItemChange={(e) => setActiveIndex(e.index)} // Update activeIndex on item change
      />
    </Dialog>
  );
}
