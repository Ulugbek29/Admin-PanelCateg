import React, { useState } from "react";
import { IconButton, Popover } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ButtonsPopOver({
  id,
  navigateToEditForm,
  setOpenModal,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    console.log(e);
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

//   console.log(id);
//   console.log(open);


  return (
    <div>
      <IconButton color="primary" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
      <div className="p-2">
        <IconButton
          className="IconButtonBox"
          color="success"
          onClick={(e) => {
            handleClose();
            navigateToEditForm(id);
          }}
        >
          <EditIcon className="IconButton" />
        </IconButton>

        <IconButton
          className="IconButtonBox"
          color="error"
          onClick={(e) => {
            handleClose();
            setOpenModal((prev)=> ({status: !prev.status , id: id}))
          }}
        >
          <DeleteIcon className="IconButton" />
        </IconButton>
      </div>
      </Popover>
    </div>
  );
}
