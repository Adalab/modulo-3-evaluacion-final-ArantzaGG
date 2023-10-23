import '../../styles/Card.scss';
import PropTypes from 'prop-types';
const Card = ({ card }) => {
  return (
    <>
      <img className='card__img' src={card.image} alt={card.title} />
      <div className='card__desc'>
        <h3 className='card__desc__movie'>{card.title}</h3>
        <p className='card__desc__line'>&quot;{card.line}&quot;</p>
        <p className='card__desc__year'>{card.year}</p>
      </div>
    </>
  );
};
Card.propTypes = { card: PropTypes.object };
export default Card;
