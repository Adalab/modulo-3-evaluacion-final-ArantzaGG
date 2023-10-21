import Card from './Card';
import '../../styles/Card.scss';
import { Link } from 'react-router-dom';

const cardList = ({ filteredScenes }) => {
  if (filteredScenes.length === 0) {
    return (
      <p className='msjError'>No hay coincidencias, ¡prueba con otro título!</p>
    );
  }
  //bonus 9: ordenar por nombre
  const orderedScenes = [...filteredScenes].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const renderCards = orderedScenes.map((scene) => {
    return (
      <li className='card' key={scene.id}>
        <Link to={`/scene/${scene.id}`} className='card__link'>
          {' '}
          <Card card={scene} />
        </Link>
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
