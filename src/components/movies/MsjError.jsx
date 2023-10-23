import { Link } from 'react-router-dom';
import '../../styles/List.scss';
import PropTypes from 'prop-types';
const ErrorModal = ({ message, onClose }) => (
  <div className='modal'>
    <div className='modal__content'>
      <p className='modal__content__msj'>{message}</p>
      <Link to='/'>
        <button className='modal__content__button' onClick={onClose}>
          Cerrar
        </button>
      </Link>
    </div>
  </div>
);

ErrorModal.propTypes = { message: PropTypes.string, onClose: PropTypes.func };
export default ErrorModal;
