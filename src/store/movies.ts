import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

import { Movie } from './../types/movie';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY || process.env.OMDB_API_KEY
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`

const initialState = {
  isLoading: false,
  error: null,
  searchTerm: '',
  movies: [] as Movie[]
}

export const fetchMovies = createAsyncThunk('movie/fetchMovies', async (movieName: string) => {
  const response = await fetch(`${BASE_URL}${movieName}`);
  const data = await response.json();
  return data.Search
});

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setSearchField: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.isLoading = false
      state.movies = action.payload
    })
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  }
});

export const { setSearchField } = movieSlice.actions

export default movieSlice.reducer;