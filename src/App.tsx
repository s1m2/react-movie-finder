import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from './store/movies';
import type { RootState, AppDispatch } from './store/store';

import './assets/styles/App.css';

import SeachBar from './components/SearchBar';
import { MovieCard } from './components/MovieCard';

const App = () => {
  const movies = useSelector((state: RootState) => state.movie.movies);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchMovies('batman'))
  }, [dispatch]);

  return (
    <div className='app'>
      <h1>Movie Ground</h1>
      <SeachBar />

      <div className='movies'>
        { movies.length > 0 && movies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div >
  )
}

export default App;
