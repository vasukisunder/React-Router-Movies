import React, { useState, useParams } from 'react';
import {Route, Link} from 'react-router-dom';
import MovieList from './Movies/MovieList.js';
import Movie from './Movies/Movie'


import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };



  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/">  
      <MovieList />
      </Route>

      <Route path="/movies/" >
        <Movie />
        </Route>
        </div>
  );
};

export default App;
