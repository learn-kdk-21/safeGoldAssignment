import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import closeButton from '../../assets/close-button.svg';
import './Modal.scss';

export const ModalComp = ({ isOpen, handleClose = () => {}, children }) => {
  const style = {
    position: 'absolute',
    top: '1.5rem',
    right: '35%',
    left: '35%',
    width: 500,
    bgcolor: 'background.paper',
    border: '1px solid rgba(0, 0, 0, .2)',
    borderRadius: '10px 10px 0.3rem 0.3rem',
    boxShadow: 24,
  };
  if (!isOpen) {
    return null;
  }

  return (
    <Modal
      onClose={(event, reason) => {
        if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
          handleClose();
        }
      }}
      disableBackdropClick
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="modalHeader">
          <IconButton className="closeButton" onClick={handleClose}>
            <img src={closeButton} alt="close" />
          </IconButton>
        </div>
        <div className="modalBody">{children}</div>
      </Box>
    </Modal>
  );
};
