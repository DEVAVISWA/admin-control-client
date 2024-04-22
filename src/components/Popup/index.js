import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { ActionButton } from "../ActionButton";
import { AiFillCloseCircle } from "react-icons/ai";

export function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  return (
    <Dialog open={openPopup} maxWidth="md">
      <DialogTitle style={{ display: "flex", justifyContent: "space-between" }}>
        <div>{title}</div>
        <ActionButton
          style={{
            padding: "0px",
          }}
          onClick={() => {
            setOpenPopup(false);
          }}
        >
          <div
            style={{
              backgroundColor: "#f07f7f",
              width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
          >
            <AiFillCloseCircle
              style={{
                color: "#ffffff",
                fontSize: "20px"
              }}
            />
          </div>
        </ActionButton>
      </DialogTitle>
      {children}
    </Dialog>
  );
}
