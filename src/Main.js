import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Main(){
    const [film, setFilm] = useState([])
    

    useEffect(()=> {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies")

        promisse.then((resp => {
            setFilm(resp.data)
            
        }))
    },[])

    

    return(
        <div className="filmsContent">
            <div className="spanTop">
                <span >Selecione o filme</span>
            </div>
            <div className="films">
                {film.map((posterURL, index)=> 
                    <div className="film">
                        <img src={film[index].posterURL}  alt={film[index].title}/>
                    </div>
                )}
                
                
            </div>
        </div>
    )
}
