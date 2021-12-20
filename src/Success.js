import {  Link } from 'react-router-dom';
export default function Sucess({final, data}){
   
    return(
        <>
        <div className="spanSucess">Pedido feito<br />com sucesso!</div>
        <div className="info">
            <h1>Filme e sessão</h1>
            <h2> {data.movie.title}   </h2>
            <h2>{data.day.date} {data.name} </h2>
        </div>
        <div className="info">
            <h1>Ingressos</h1>
            {final.seatNumber.map((info)=>(
                <h2 key={info} >{ info}</h2>   
                ))}
        </div>
        <div className="info">
            <h1>Comprador</h1>
            <h2>Nome: {final.name} </h2>
            <h2>CPF: {final.cpf}</h2>
        </div>
        <div className="home">
            <Link to="/">
            <button>Voltar pra Home</button>
            </Link>
        </div>
        </>
    )
}