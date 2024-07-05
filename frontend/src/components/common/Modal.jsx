const Modal = ({ show, onClose, children, modalStyle }) => {
  if (!show) {
    return null;
  }

  return (
    <div
      className={`fixed w-auto h-auto inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center`}
      onClick={onClose}
    >
      <div
        className={`${modalStyle} modal w-auto p-3 relative m-auto -top-[400px]`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
