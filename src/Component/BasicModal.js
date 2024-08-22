import React from "react";
import "./styles/BasicModal.css";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Image } from "primereact/image";

export default function BasicModal({ open, handleClose, getID, myProjects }) {
  return (
    <Dialog visible={open} style={{ width: "30vw" }} onHide={handleClose}>
      <div className="fakeHeaderOuter">
        <h2 className="fakeHeader">{myProjects[getID].name}</h2>
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
          <Button
            severity="secondary"
            style={{ backgroundColor: "black" }}
            onClick={() => window.open(`${myProjects[getID].link}`)}
          >
            View in action
          </Button>
        )}
        {myProjects[getID].srcCode && (
          <Button
            severity="secondary"
            style={{ backgroundColor: "black" }}
            onClick={() => window.open(`${myProjects[getID].srcCode}`)}
          >
            View source code
          </Button>
        )}
      </div>
    </Dialog>
  );
}
