import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./styles/BasicModal.css";

const style = {
  transform: "translate(-50%, -50%)",
  outerHeight: "60%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 0,
};

export default function BasicModal({
  open,
  handleClose,
  setGetID,
  getID,
  myProjects,
}) {
  const prevPic = () => {
    if (getID === 0) {
      return setGetID(3);
    } else {
      setGetID(getID - 1);
    }
  };
  const nextPic = () => {
    if (getID === 3) {
      return setGetID(0);
    } else {
      setGetID(getID + 1);
    }
  };
  return (
    <div className="modal">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="box">
          <div>
            <div
              className="img2"
              style={{
                backgroundImage: `url(images/projects/${myProjects[getID].name}-full.PNG)`,
              }}
            >
              <button onClick={() => prevPic()} className="gumb">
                <div className="backIcon"></div>
              </button>
              <button onClick={() => nextPic()} className="gumb">
                <div className="nextIcon"></div>
              </button>
            </div>
          </div>
          <div className="modalBtns">
            <button
              className="modalBtn"
              onClick={() => window.open(`${myProjects[getID].link}`)}
            >
              View in action
            </button>

            <button
              className="modalBtn"
              onClick={() => window.open(`${myProjects[getID].srcCode}`)}
            >
              View source code
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
