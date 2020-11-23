import React from 'react';
import MovieCard from './MovieCard'
import {Link} from 'react-router-dom'


function MOvieList(props) {
    const { film } = props
    const { arr } = props

    return (
        <div className='row '>

            {(arr.length) ? arr.map((el, i) =><Link className='lien' to={`trailer/${el.id}`}><MovieCard film={el} key={i} /></Link>) : film.map((el, i) =><Link className='lien' to={`trailer/${el.id}`}> <MovieCard film={el} key={i} /></Link>)}

        </div>

    )
}


export default MOvieList;