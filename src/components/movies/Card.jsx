import '../../styles/Card.scss';
const Card = ({ card }) => {
  return (
    <>
      <img className='card__img' src={card.image} alt={card.title} />
      <div className='card__desc'>
      <h3 className='card__movie'>{card.title}</h3>
      <p className='card__line'>"{card.line}"</p>
      <p className='card__year'>{card.year}</p>
      </div>
    </>
  );
};

export default Card;
