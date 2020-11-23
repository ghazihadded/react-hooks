import React from 'react';
import '../App.css'
import Rating from './Rating'

function MovieCard(props){
    const {film}=props;
   
    
   


    return (
      
       <div  className='projects-container ' >
         
        <div  className='card' style={{width : "26rem"}}>
        <img className="card-header" src={film.posteUrl}  alt='' style={{height:'300px'}}/>
         <div className='card-body '>

         <p className="card-title "><h2>{film.titre}</h2></p>
       
         <p className='card-text'>{film.description}</p>
          <Rating  rating={film.rating}/>
         </div>
        </div>
        </div>
      
        
    )
}



export default MovieCard ;