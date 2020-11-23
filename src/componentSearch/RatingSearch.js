import React,{useState} from 'react';
import {FaStar} from 'react-icons/fa'
import '../App.css'

function RatingSearch(props){
  const arr=[1,2,3,4,5]
  const{ratingFilter}=props
   
   const[ratingValue,setRatingValue]=useState()

   

    return(
            
        <div>
        
          {arr.map((star,i)=>{
            
          return(
             
            <label key={i}  onClick={()=>setRatingValue(star)} >
                <input type='radio'    onClick={()=>ratingFilter(ratingValue)} />
                <FaStar color={star<=ratingValue?"#F1C40F ":"#BDC3C7" }/>
            </label>
           
          )

          })}  
            
          </div>
    )
    
}



export default RatingSearch;