import React from 'react'
import { useHistory } from 'react-router-dom'

function Trailer({ match, data, search }) {

    let history = useHistory()

    const find = data.find(el => el.id == match.params.movieId)
    let test;

    if (search) {
        test = <div>
            <h1>{find.titre}</h1>
            <p>{find.description}</p>
            <iframe width="560" height="315" src={find.trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br />
            <button className='px-4' onClick={() => history.goBack()} style={{ color: 'black', background: 'white' }}>accueil</button>
        </div>
    } else if (find) {
        test = <div>
            <h1>{find.titre}</h1>
            <p>{find.description}</p>
            <iframe width="560" height="315" src={find.trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br />
            <button className='px-4' onClick={() => history.goBack()} style={{ color: 'black', background: 'white' }}>accueil</button>
        </div>
    }

    return (
        <div className='container text-center '>{test}</div>
    )
}

export default Trailer;