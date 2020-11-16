import React,{ useState } from 'react';
import './App.css';
import MovieList from'./component/MovieList'
import films from './Films'




function App() {
 const [film,setFilm]=useState(films);
const [name,setName]=useState('');
const[descrip,setDescrip]=useState('');
const[url,setUrl]=useState('');

const[search,setSearch]=useState('');
const[arr,setArr]=useState([])

function addFilm(x){
   
  return  setFilm([...film,x])

}




   function FilterFilm(){
      const test= film.filter((x)=>x.titre.toLocaleLowerCase().includes(search))
      if(test.length)
      return setArr(test)
      else 
      alert (`${search} is not exist`)
      setSearch('')  
      
   }


 


  return (
    
    <div className="container">
      <h1 className='text-center'>MOVIES</h1>
     <form >
     <div class="form-group">
    <label >search</label>
    <input onChange={(e)=>setSearch(e.target.value)} type="text" class="form-control" placeholder="*****" value={search}/>
    <button onClick={(e)=>{e.preventDefault() ; FilterFilm()}}    type="submit" class="btn btn-primary">search</button>
    </div>
    </form>
    
     <MovieList addFilm={addFilm}  film={film}  arr={arr}/>  

     <form>
    <label >name</label>
    <input onChange={(e)=>setName(e.target.value)} type="text" class="form-control" placeholder="*****" />
   
    <label >discription</label>
    <input onChange={(e)=>setDescrip(e.target.value)} type="text" class="form-control" placeholder="*****" />
    
    <label >lien</label>
    <input onChange={(e)=>setUrl(e.target.value)} type="text" class="form-control" placeholder="*****" />
   
    <button onClick={(e)=>{e.preventDefault();
       addFilm({titre:name,description:descrip,posteUrl:url})}} type="submit" class="btn btn-primary">Add</button>

     </form>
     
    </div>
  );
}

export default App;
