import React from 'react';
import MovieCard from'./MovieCard'

function MOvieList (props){
    const {film}=props
    const {arr}=props
    
    return (
        <div className='row'>
            
        {(arr.length)?arr.map((el,i)=><MovieCard film={el}  key={i}/>):film.map((el,i)=><MovieCard film={el}  key={i}/>)}
            
            </div>
      
    )
}


export default MOvieList ;