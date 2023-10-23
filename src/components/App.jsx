import '../styles/App.scss';
import { useState, useEffect } from 'react';
import getDataApi from '../services/calltoapi';
import List from './movies/List';
import Header from './header/Header';
import { Routes, Route } from 'react-router-dom';
import DetailCard from './movies/DetailCard';
import LocalStorage from '../services/LocalStorage';

const App = () => {
  const [dataCard, setDataCard] = useState(
    LocalStorage.get('storagedData', [])
  );
  const [titleFilter, setTitleFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');

  useEffect(() => {
    if (dataCard.length === 0) {
      getDataApi().then((cleanData) => {
        setDataCard(cleanData);
        LocalStorage.set('storagedData', cleanData);
      });
    }
  }, []);

  const handleChange = (value) => {
    setTitleFilter(value);
  };

  const handleYear = (selectedYear) => {
    setYearFilter(selectedYear);
  };

  const getYear = () => {
    const years = dataCard.map((scene) => scene.year);
    const singleYears = new Set(years);
    const singleYearsArray = [...singleYears];
    return singleYearsArray.sort();
  };

  const filteredScenes = dataCard
    .filter((scene) => scene.title.toLowerCase().includes(titleFilter))
    .filter((item) => {
      if (yearFilter === '') {
        return true;
      } else {
        const yearFilterNumber = parseInt(yearFilter);
        return yearFilterNumber === item.year;
      }
    });

  return (
    <div className='body'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header
                getYear={getYear()}
                yearFilter={yearFilter}
                handleYear={handleYear}
                titleFilter={titleFilter}
                handleChange={handleChange}
              />

              <List dataCard={dataCard} filteredScenes={filteredScenes} />
            </>
          }
        />
        <Route
          path='/scene/:id'
          element={
            <>
              <DetailCard dataCard={dataCard} />
            </>
          }
        />
        <Route path='*' element={<p>La página que buscas no existe.</p>} />
      </Routes>
    </div>
  );
};

export default App;
