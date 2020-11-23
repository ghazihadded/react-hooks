import React,{useState} from 'react'
import Modal from'react-modal'

function AddMovies(props){
    const{addfilm}=props
    const[modal,setModal]=useState(false)
    const [name, setName] = useState('');
    const [descrip, setDescrip] = useState('');
    const [url, setUrl] = useState('');
    const [rating, setRating] = useState(0)
    

    function openModel(){
      setModal(true);
    }
    function closeModel(){
      setModal(false)
    }

    

    return(
      <div>
        <button onClick={openModel} className='btn-primary plus mb-3' >+</button>
        <Modal isOpen={modal} onRequestClose={closeModel} >
        <form className='form-footer' onSubmit={(e) => {
          e.preventDefault();
          addfilm({ id:Date.now(),titre: name, description: descrip,rating:rating ,posteUrl: url });closeModel()
        }}>
        <label >name</label>
        <input onChange={(e) => setName(e.target.value)} type="text" required className="form-control" placeholder="*****" />

        <label >discription</label>
        <input onChange={(e) => setDescrip(e.target.value)} type="text" required className="form-control" placeholder="*****" />

        <label >Rating</label>
        <input onChange={(e) => setRating(e.target.value)} type='number' max="5" required className="form-control" placeholder="*****" />
        
       

        <label >lien</label>
        <input onChange={(e) => setUrl(e.target.value)} type='url' required  className="form-control" placeholder="*****" />

        <button   type="submit" class="btn btn-primary">Add</button>

      </form>
      </Modal>
      </div>
    )
}


export default AddMovies ;