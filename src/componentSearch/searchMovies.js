import React,{useState} from 'react';
import RatingSearch from './RatingSearch';

function SearchMovies(props) {
    const {ratingFilter}=props
    const {FilterFilm}=props
    const [search, setSearch] = useState('');
    


    function handleClick(e){
         setSearch(e.target.value)
           
    }
   

    return (

        <div>

            <h1 className='nav navbar bg-dark'>MOVIES</h1>
            <form className='search' >

                <div class="form-group">
                    <input onChange={(e)=>handleClick(e)} type="text" class="form-control" placeholder="*****" value={search} />
                    <button onClick={(e) => { e.preventDefault(); FilterFilm(search);setSearch('') }} type="submit" class="btn btn-primary">search</button>

                </div>
                <RatingSearch ratingFilter={ratingFilter}/>
            </form>
        </div>


    )



}


export default SearchMovies;