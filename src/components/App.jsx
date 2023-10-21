import '../styles/App.scss';
import { useState, useEffect } from 'react';
import getDataApi from '../services/calltoapi';
import List from './movies/List';
import Header from './header/Header';

// import DetailCard from './DetailCard';

const App = () => {
  const [dataCard, setDataCard] = useState([]);
  const [titleFilter, setTitleFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');

  useEffect(() => {
    getDataApi().then((cleanData) => {
      setDataCard(cleanData);
    });
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
    return singleYearsArray;
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
    <div>
      <Header
        getYear={getYear()}
        yearFilter={yearFilter}
        handleYear={handleYear}
        titleFilter={titleFilter}
        handleChange={handleChange}
      />
      <List dataCard={dataCard} filteredScenes={filteredScenes} />
    </div>
  );
};

export default App;
