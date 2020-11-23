import React, { useState } from 'react';
import './App.css';

import MovieList from './component/MovieList'
import films from './Films'

import SearchMovies from './componentSearch/searchMovies';
import AddMovies from './componentAdd/AddMovies';
import Trailer from './Trailer'
import {Route,BrowserRouter,Switch} from 'react-router-dom';




function App() {
 
  const [film, setFilm] = useState(films);
  const [arr, setArr] = useState([])
  

  

 function ratingFilter(v){
   const test=film.filter(x=>x.rating>=v)
   if(test.length)
   return setArr(test)
   else
   alert('movie not exixst')
   setArr([])
 }

 function FilterFilm(search) {
  const test = film.filter((x) => x.titre.toLocaleLowerCase().includes(search))
  if (test.length)
    return setArr(test)
    else
    alert(`${search} is not exist`)
    setArr([])
    
  }
  
  function addFilm(x) {

    if(!x.rating ){
      alert('could you please check your input again')
    }else

    return setFilm([...film, x])
    
   
 
  }




  return (
    <BrowserRouter>
    <div className="container">
      
      <SearchMovies ratingFilter={film} FilterFilm={FilterFilm} ratingFilter={ratingFilter} />

       <Switch>
      <Route exact path='/' > <MovieList film={film} arr={arr} /> </Route>
  <Route path='/trailer/:movieId' render = {(props)=><Trailer data={film} {...props} search={arr}{...props} />} />
       </Switch>
       <AddMovies addfilm={addFilm} />  
    </div>
    
    </BrowserRouter>
  );
}

export default App;
