import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Button from "./ButtonPost"

export default function Session({ film, setFinal, setData }){

    const { idSessao } = useParams()
    const [seats, setSeats] = useState([])
    const [hour, setHour] = useState([])
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    let selectedSeats = []
    let seatNumber = []
    const [objPost, setObjPost] = useState({})

    //eslint-disable-next-line
    useEffect(() => {objApi()}, [cpf, name, selectedSeats,])
        
    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`)
        promisse.then(response => {
            setSeats(response.data.seats) 
            setHour(response.data)
           
            setData(response.data)
        }) // eslint-disable-next-line
    }, [])

function Assent({ children, avalible, name, cpf, seat, number}){
    
    const [selected, setSelected] = useState(false)
    
    function click(){
        if(avalible){
            if(selected){
                selectedSeats=selectedSeats.filter(nu => nu !== seat)
                seatNumber=seatNumber.filter(n => n !== number)
                setSelected(false)
            }else{
                setSelected(true)
                selectedSeats.push(seat)
                seatNumber.push(number)
            }
        }  
        else {alert("Não disponivel")}
    }
    return(
        <Contain 
            selected={selected}
            avalible ={avalible}
            onClick ={() => {click()}}
            >
            {children}
        </Contain>
    )
}

if (hour.length === 0) {
    return ''
}

function objApi(data) {
       setFinal({
        seatNumber: seatNumber,
        name: name,
        cpf: cpf,
        title: data
        
    })
    
    setObjPost({
        ids: selectedSeats,
        name: name,
        cpf: cpf
    }) 
}

    return(
        <>
         <div className="spanTop">
            <span >Selecione o(s) assento(s)</span>
        </div>
        <div className="containSit">
            {seats.map((info)=>(
                <Assent avalible={info.isAvailable} key={info.id} seat={info.id} number={info.name}>
{                    
}                {info.name}
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
                <input onChange={e => setName(e.target.value)} value={name} type="text" placeholder="   Digite seu nome..." />
            </div>

            <div className="cpf">
                <span>CPF do comprador:</span>
                <input onChange={e => setCpf(e.target.value)} value={cpf} type="number" placeholder="   Digite seu CPF..." />
            </div>
            
        </div>
        <div className="reserve">
            <Link to="/sucesso">
                <Button obj={objPost}/>
            </Link>
        </div>
        <footer>
            <div className="molding">
              
            <img src={hour.movie.posterURL} alt="" />
                
            </div>
            <div className="span">
                <span>{hour.movie.title}</span>
                <span>{hour.day.weekday} - {hour.name}</span> 
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