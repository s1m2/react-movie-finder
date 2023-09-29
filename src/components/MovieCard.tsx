import type { Movie } from './../types/movie';

export const MovieCard = ({Title, Poster, Year}: Movie) => {
  return(
    <div className="card">
      <div className="card__image">
        <img src={Poster} alt="title" />
      </div>
      <h3>{Title}</h3>
      <p>{Year}</p>
    </div>
  )
}