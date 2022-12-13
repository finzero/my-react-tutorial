import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetching,
  fetchSuccess,
  fetchError,
  setMovie,
} from '../features/movieSlice';

const API_KEY = 'aec702d3';

const ExtraReducer = () => {
  const searchRef = useRef('');
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.data);

  const handleSearchMovie = () => {
    const term = searchRef.current.value;
    if (term) {
      dispatch(fetching());
      fetch(`http://www.omdbapi.com/gql`)
        .then((rawRes) => rawRes.json())
        .then((response) => {
          if (response.Error) {
            throw response.Error;
          } else {
            dispatch(fetchSuccess());
            dispatch(setMovie(response.Search));
          }
        })
        .catch((_error) => {
          console.log('fetch error');
          dispatch(fetchError());
        });
    }
  };

  return (
    <section>
      <h3>Fetch Movie</h3>
      <hr />
      <input type="text" name="search" id="search" ref={searchRef} />
      <button className="btn btn-sm btn-primary" onClick={handleSearchMovie}>
        Fetch Data
      </button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <td>Poster</td>
            <td>Judul</td>
            <td>Tahun Tayang</td>
          </tr>
        </thead>
        <tbody>
          {movies && movies.length ? (
            movies.map((movie, movieIdx) => (
              <tr key={`${movie}_${movieIdx}`}>
                <td>
                  {movie.Poster !== 'N/A' ? (
                    <img
                      style={{ width: '100px' }}
                      src={movie.Poster}
                      alt={movie.Title}
                    />
                  ) : (
                    <div>No Image</div>
                  )}
                </td>
                <td>{movie.Title}</td>
                <td>{movie.Year}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No Data</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default ExtraReducer;
