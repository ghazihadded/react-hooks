import React from 'react';
import {FaStar} from 'react-icons/fa'
import '../App.css'

function Rating(props){
   const{rating}=props
  
    return(
            
        <div>
        
          {[...Array(5)].map((star,i)=>{
           const count=i+1 ;
          return(
            <label>
                <input type='radio' name='rating' value={count}  />
                <FaStar color={count<=rating?"#F1C40F ":"#BDC3C7" }/>
            </label>
           
          )

          })}  
            
          </div>
    )
    
}



export default Rating;