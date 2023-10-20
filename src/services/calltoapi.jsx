import uuid from 'react-uuid';

const getDataAPI = () => {
  return fetch(
    'https://owen-wilson-wow-api.onrender.com/wows/random?results=50'
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((movie) => {
        return {
          image: movie.poster,
          title: movie.movie,
          line: movie.full_line,
          year: movie.year,
          id: uuid(),
          audio: movie.audio,
        };
      });
      return cleanData;
    });
};

export default getDataAPI;
