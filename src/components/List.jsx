import Card from './Card';
import '../styles/Card.scss'
const cardList = ({ filteredScenes }) => {
  const renderCards = filteredScenes.map((scene) => {
    
    return (
      <li className='card' key={scene.id}>
        <Card card={scene} />
      </li>
    );
  });
  return (
    <>
      <ul className='cardList'>{renderCards}</ul>
    </>
  );
};

export default cardList;
