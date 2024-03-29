import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ErrorModal({openErrorPopUp, closeErrorModal,deleteData}) {

console.log(openErrorPopUp.status)
console.log(openErrorPopUp.id)
  return (
    <div>
      <Modal
        open={openErrorPopUp.status}
        onClose={closeErrorModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure that you want to delete?
          </Typography>
          <div className='flex gap-4 mt-4'>
          <Button onClick={closeErrorModal} fullWidth variant="outlined">No</Button>
          <Button onClick={()=> {
            closeErrorModal()
            deleteData(openErrorPopUp.id)
          }} fullWidth variant="contained">yes</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}