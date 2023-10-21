import '../../styles/Card.scss'
const Card = ({ card }) => {
  return (
    <>
      <a className="card__a" href='#'>
        <img className='card__img' src={card.image} alt={card.title} />
        <h3 className='card__movie'>{card.title}</h3>
        <p className='card__line'>"{card.line}"</p>
        <p className='card__year'>{card.year}</p>
      </a>
    </>
  );
};

export default Card;
