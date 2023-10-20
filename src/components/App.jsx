import '../styles/App.scss';
import { useState, useEffect } from 'react';
import getDataApi from '../services/calltoapi';
import List from './List';
import Header from './Header';

// import DetailCard from './DetailCard';

const App = () => {
const  [dataCard, setDataCard] = useState([]);
const [titleFilter, setTitleFilter] = useState ("");

useEffect(() => {
    getDataApi().then((cleanData) => {
      setDataCard(cleanData);
    });
}, []);

const handleChange = (value) => {
  setTitleFilter(value);
}

const filteredScenes = dataCard.filter ((item) => item.title.toLowerCase().includes(titleFilter));


  return (
    <div>
      <Header titleFilter={titleFilter} handleChange={handleChange}/>
      <List dataCard = {dataCard} filteredScenes={filteredScenes}/>
    </div>
  );
}

export default App;