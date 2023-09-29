import { KeyboardEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchField, fetchMovies } from "../store/movies";
// import SearchIcon from './../assets/svg/search-4-svgrepo-com.svg';
import { AppDispatch } from "../store/store";

const SeachBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch<AppDispatch>()

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;
    dispatch(setSearchField(searchTerm));
    dispatch(fetchMovies(searchTerm));
  }

  return (
    <div className="form-group">
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search for a movie..."
        autoComplete="off"
        value={searchTerm}
        onInput={(event) => { setSearchTerm((event.target as HTMLInputElement).value) }}
        onKeyDown={(event) => { handleSearch(event) }}
      />

      {/* <img src={SearchIcon} alt="search" className="form-group__img" /> */}
    </div>
  )
}

export default SeachBar;