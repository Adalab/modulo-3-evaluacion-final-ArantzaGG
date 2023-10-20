import Card from './Card';
import '../styles/Card.scss'
const cardList = ({ filteredScenes }) => {
    if (filteredScenes.length === 0){
        return <p className='msjError'>No hay coincidencias, ¡prueba con otro título!</p>
    }
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
