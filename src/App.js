import React, { useState, useEffect } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import MovieCollection from './components/MovieCollection';
import WatchLater from './components/WatchLater';
import RemoveMovie from './components/RemoveMovie';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import 'semantic-ui-css/semantic.min.css'
import './App.css';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [watchList, setWatchList] = useState([]);
  
  useEffect(() => {
    requestMovies(query);
  }, [query]);

  useEffect(() => {
    const cachedList = JSON.parse(localStorage.getItem('my-watch-list'));
    if (cachedList) setWatchList(cachedList);
  }, []);

  const cacheList = (list) => {
    localStorage.setItem('my-watch-list', JSON.stringify(list))
  }

  async function requestMovies(q) {
    const API_KEY = '99438dca';
    const ENDPOINT = `http://www.omdbapi.com/?s=${q}&apikey=${API_KEY}`;

    const res = await fetch(ENDPOINT);
    const json = await res.json();
    if (json.Search) setMovies(json.Search);
    console.log(json.Search)
  }

  function addMovie(movie) {
    const newList = [...watchList, movie];
    setWatchList(newList);
    cacheList(newList);
  }

  function removeMovie(movie) {
    const newList = watchList.filter(mv => mv.imdbID !== movie.imdbID);
    setWatchList(newList);
    cacheList(newList);
  }
  

  return (
    <div className="App">
      <Container>
        <h1 className="logo">VidFlix</h1>
        <Container fluid className="movie-list">
          <Segment>
            <SearchBar query={query} setQuery={setQuery}/>
          </Segment>
          <Title heading="Movies" />
          <Segment className="row">
            <MovieCollection movies={movies} overlay={WatchLater} handleWatchList={addMovie} />
          </Segment>
          <Title heading="Watch later" />
          <Segment className="row">
            <MovieCollection movies={watchList} overlay={RemoveMovie} handleWatchList={removeMovie} />
          </Segment>
        </Container>
      </Container>
    </div>
  )
}
