const ImportPopUp = ({ open, onClose, upload }) => {
  if (!open) return null;
  return (
    <div className="modal" tabIndex={-1} id="kt_modal_1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <button onClick={onClose} className="close-modal">
              X
            </button>
            <h2 className="text-light">Bulk Upload</h2>
            <p className="text-light">
              bulk upload will override the entire list, click YES to start the
              upload or NO to cancel
            </p>

            <br />
            <button onClick={upload}>YES</button>
            <button onClick={onClose}>NO</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportPopUp;
