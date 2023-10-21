import '../../styles/Card.scss';
import '../../styles/DetailCard.scss'
import { Link } from 'react-router-dom';
const DetailCard = ({ card }) => {
  return (
    <article className='detailCard'>
      
      <div className='detailCard__container'>
      <img className='detailCard__container__img' src={card.image} alt={card.title} />
      <h3 className='detailCard__container__movie'>Título: {card.title}</h3>
      </div>
      <div className='detailCard__desc'>
      <p className='detailCard__desc__line'>Frase: "{card.line}"</p>
      <p className='detailCard__desc__year'>Año: {card.year}</p>
      <Link className='detailCard__desc__audio' to={card.audio} target='_blank'>Escucha el clip aquí <i class="fa-solid fa-headphones fa-shake"></i></Link>
      </div>    
    </article>
  );
};

export default DetailCard;
