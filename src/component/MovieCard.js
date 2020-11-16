import React from 'react';
import '../App.css'


function MovieCard(props){
    const {film}=props;
   
    
   


    return (
      
        
          
          <div  className='projects-container ' >
         
        <div  className='card' style={{width : "26rem"}}>
        <img className="card-header" src={film.posteUrl}  alt='' style={{height:'300px'}}/>
         <div className='card-body'>
         <p className="card-title">{film.titre}</p>
       
         <p className='card-text'>{film.description}</p>
         </div>
        </div>
        </div>
      
        
    )
}



export default MovieCard ;