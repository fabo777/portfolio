import React from "react";
import { Dialog } from "primereact/dialog";
import "./styles/BasicModal.css";
import { Button } from "primereact/button";
import { Image } from "primereact/image";

export default function BasicModal({ open, handleClose, getID, myProjects }) {
  return (
    <Dialog visible={open} style={{ width: "30vw" }} onHide={handleClose}>
      <div style={{ textAlign: "center", margin: "0" }}>
        <h2 style={{ marginTop: "0" }}>{myProjects[getID].name}</h2>
      </div>
      <div className="centerImage">
        <Image
          src={`images/projects/${myProjects[getID].name}-FULL.PNG`}
          alt="Image"
          width="100%"
          preview
          loading="lazy"
        />
      </div>
      <div className="modalBtns">
        {myProjects[getID].link && (
          <Button onClick={() => window.open(`${myProjects[getID].link}`)}>
            View in action
          </Button>
        )}
        {myProjects[getID].srcCode && (
          <Button onClick={() => window.open(`${myProjects[getID].srcCode}`)}>
            View source code
          </Button>
        )}
      </div>
    </Dialog>
  );
}
