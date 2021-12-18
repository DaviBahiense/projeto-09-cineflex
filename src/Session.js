import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function Session(){

    const [seats, setSeats] = useState([])
    const { idSessao } = useParams()

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`)
        promisse.then(response => {
            setSeats(response.data.seats)  
           /*  seats.forEach(seat => {
            }); */
                seats.isSelected = false;
        })
    }, [])

    const [clicked, setClicked] = useState(false);

    return(
        <>
         <div className="spanTop">
            <span >Selecione o(s) assento(s)</span>
        </div>
        <div className="containSit">
            {seats.map((info)=>(
                <div className={
                `
                sit 
                ${(!info.isAvailable) && 'unavailable'} 
                ${(!info.isSelected) && ' selected'}
                ${clicked && 'selected'}
                `
            } 
                onClick={()=> setClicked(true)}
                key={info.id} >{info.name}</div>
            ))}
        </div>
        <legend>
            <div className="order">
                <div className="sit selected"></div>
                <span>Selecionado</span>
            </div>
            <div className="order">
                <div className="sit"></div>
                <span>Disponível</span>
            </div>
            <div className="order">
                <div className="sit unavailable"></div>
                <span>Indisponivel</span>
            </div>
        </legend>
        <div className="input">
            <div className="name">
                <span>Nome do comprador:</span>
                <input type="text" placeholder="   Digite seu nome..." />
            </div>
            <div className="cpf">
                <span>CPF do comprador:</span>
                <input type="text" placeholder="   Digite seu CPF..." />
            </div>
        </div>
        <div className="reserve">
            <button>Reservar assento(s)</button>
        </div>
        <footer>
            <div className="molding">
                <img src="./img/image6.png" alt="" />
            </div>
            <div className="span">
                <span>Enola Holmes</span>
                <span>Quinta-Feira - 15:00</span>
            </div>
        </footer>
        </>
        
    )
   
}