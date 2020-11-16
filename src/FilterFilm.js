import React from 'react';
import MovieCard from './component/MovieCard';




function FilterFilm(props){
const {film}=props;

const filter=film.filter(x=>x.name==props.search)




return (
    <div>
        
      <MovieCard filter={filter} />
    </div>

)
}


export default FilterFilm;