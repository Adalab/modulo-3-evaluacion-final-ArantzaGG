import '../../styles/List.scss';

const ErrorModal = ({ message, onClose }) => (
  <div className='modal'>
    <div className='modal__content'>
      <p className='modal__content__msj'>{message}</p>
      <button className='modal__content__button' onClick={onClose}>
        Cerrar
      </button>
    </div>
  </div>
);
export default ErrorModal;
