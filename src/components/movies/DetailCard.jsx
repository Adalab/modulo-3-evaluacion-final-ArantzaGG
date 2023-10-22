import '../../styles/Card.scss';
import '../../styles/DetailCard.scss';
import { Link } from 'react-router-dom';
const DetailCard = ({ card }) => {
  return (
    <article className='detailCard'>
      <Link className='detailCard__back' to='/'>
        <i className='icon fa-solid fa-left-long fa-beat fa-2xl'></i>
      </Link>
      <div className='detailCard__container'>
        <img
          className='detailCard__container__img'
          src={card.image}
          alt={card.title}
        />
        <h3 className='detailCard__container__movie'> {card.title}</h3>
      </div>
      <div className='detailCard__desc'>
        <p className='detailCard__desc__line'>
         
          "{card.line}"<i className='icon fa-solid fa-comments fa-xl'></i>
        </p>

        <p className='detailCard__desc__dir'>
         
          {card.director} - {card.year}
          <i className='icon fa-solid fa-clapperboard fa-xl'></i>
        </p>
        <Link
          className='detailCard__desc__audio'
          to={card.audio}
          target='_blank'
        >
          Escucha el clip aquí:
          <i className='icon fa-solid fa-headphones-simple fa-shake fa-xl'></i>
        </Link>
      </div>
    </article>
  );
};

export default DetailCard;
