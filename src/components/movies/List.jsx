import Card from './Card';
import '../../styles/Card.scss';
import '../../styles/List.scss';
import { Link } from 'react-router-dom';
import ErrorModal from './MsjError';
import { useState, useEffect } from 'react';

const cardList = ({ filteredScenes }) => {
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  useEffect(() => {
    if (filteredScenes.length === 0) {
      setErrorMessage('¡Vaya! No hay coincidencias, ¿por qué no pruebas con otro título?');
      setIsErrorModalOpen(true);
    }else{
      setIsErrorModalOpen(false);
    }
  }, [filteredScenes]);
  const handleCloseModal = () => {
    setIsErrorModalOpen(false);
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
    <section className='section'>
      <ul className='section__cardList'>{renderCards}</ul>
      {isErrorModalOpen && (
        <ErrorModal
          message={errorMessage}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default cardList;
