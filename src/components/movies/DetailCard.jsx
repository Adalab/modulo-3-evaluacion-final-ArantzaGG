import '../../styles/Card.scss';
import '../../styles/DetailCard.scss';
import { Link } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';
import PropTypes from 'prop-types';

const DetailCard = ({ dataCard }) => {
  const { pathname } = useLocation();
  const route = matchPath('/scene/:id', pathname);
  const cardId = route !== null ? route.params.id : '';

  const oneScene = dataCard.find((scene) => scene.id === cardId);

  if (oneScene === undefined) {
    return <p></p>;
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
        <p className='detailCard__desc__line'>
          &quot;{oneScene.line}&quot;
          <i className='icon fa-solid fa-comments fa-xl'></i>
        </p>

        <p className='detailCard__desc__dir'>
          {oneScene.director} - {oneScene.year}
          <i className='icon fa-solid fa-clapperboard fa-xl'></i>
        </p>
        <Link
          className='detailCard__desc__audio'
          to={oneScene.audio}
          target='_blank'
        >
          Escucha el clip aquí:
          <i className='icon fa-solid fa-headphones-simple fa-shake fa-xl'></i>
        </Link>
      </div>
    </article>
  );
};
DetailCard.propTypes = { dataCard: PropTypes.array };
export default DetailCard;
