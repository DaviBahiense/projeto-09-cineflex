import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

export default function Session({ film }){

    const { idSessao } = useParams()
    const [seats, setSeats] = useState([])
    /* console.log(film[idSessao].title) */
    
    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`)
        promisse.then(response => {
            setSeats(response.data.seats) 
           
        })
    }, [])


function Assent({ children, avalible}){
    const [selected, setSelected] = useState(false)

    return(
        <Contain
            
            selected={selected}
            avalible ={avalible}
            onClick ={() => {
                if(avalible) selected ? setSelected(false) : setSelected(true)
                else alert("Não disponivel")
            }}
        >
            {children}
        </Contain>
    )
}

    return(
        <>
         <div className="spanTop">
            <span >Selecione o(s) assento(s)</span>
        </div>
        <div className="containSit">
            {seats.map((info)=>(
                <Assent avalible={info.isAvailable} key={info.id}>
                {info.name}
                   
                </Assent>
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
              
                <img src="" alt="" />
            </div>
            <div className="span">
                <span>Enola Holmes</span>
                <span>Quinta-Feira - 15:00</span>
            </div>
        </footer>
        </>
    )
}

const Contain = styled.button`
height: 26px;
width: 26px;
display: flex;
justify-content: center;
align-items: center;
border: none;
border-radius: 12px;
background: ${(props) => props.selected ? "#8DD7CF" : props.avalible ? "#C3CFD9" : "#FBE192"};
margin: 0 7px 18px 0;`