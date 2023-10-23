import '../../styles/Card.scss';
import '../../styles/DetailCard.scss';
import { Link } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';
import PropTypes from 'prop-types';
import ErrorModal from './MsjError';

const DetailCard = ({ dataCard }) => {
  const { pathname } = useLocation();
  const route = matchPath('/scene/:id', pathname);
  const cardId = route !== null ? route.params.id : '';

  const oneScene = dataCard.find((scene) => scene.id === cardId);

  if (oneScene === undefined) {
    return (
      <ErrorModal
        message={
          'Página no encontrada. Pulsa "Cerrar" para volver a la página principal.'
        }
      />
    );
  }
  return (
    <article className='detailCard'>
      <Link className='detailCard__back' to='/'>
        <i className='icon fa-solid fa-left-long fa-beat fa-2xl'></i>
      </Link>
      <div className='detailCard__container'>
        <img
          className='detailCard__container__img'
          src={oneScene.image}
          alt={oneScene.title}
        />
        <h3 className='detailCard__container__movie'> {oneScene.title}</h3>
      </div>
      <div className='detailCard__desc'>
        <span className='detailCard__desc__line'>
          <i className='icon fa-solid fa-comments fa-xl'></i>
          <p>&quot;{oneScene.line}&quot;</p>
        </span>
        <span className='detailCard__desc__dir'>
          <i className='icon fa-solid fa-clapperboard fa-xl'></i>{' '}
          <p>
            {oneScene.director} - {oneScene.year}
          </p>
        </span>
        <span className='detailCard__desc__audio'>
          <i className='icon fa-solid fa-headphones-simple fa-shake fa-xl'></i>
          <Link
            className='detailCard__desc__audio-link'
            to={oneScene.audio}
            target='_blank'
          >
            Clip de audio
          </Link>
        </span>
      </div>
    </article>
  );
};
DetailCard.propTypes = { dataCard: PropTypes.array };
export default DetailCard;
