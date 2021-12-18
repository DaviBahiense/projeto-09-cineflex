import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function Film({ film }) {

    const { idFilme } = useParams()
    const [session, setSession] = useState([])

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`)
        promisse.then(avalible => {
            setSession(avalible.data.days)  
        })
    }, [])

    return (
        <>
            <div className="spanTop">
                <span >Selecione o horário</span>
            </div>
            <div className="selection">
                {session === [] ? '' : session.map((s, i) =>
                    <div key={i}>
                        <div className="day" key={s.id}>
                            <span>{s.weekday} - {s.date}</span>
                        </div>
                        {session[i].showtimes.map(sit =>
                            <Link to={`/assentos/${sit.id}`} key={sit.id}>
                                <button className="hour">{sit.name}</button>
                            </Link>
                        )}
                    </div>
                )}
            </div>
            <footer>
                <div className="molding">
                    <img src="./img/image6.png" alt="" />
                </div>
                <span>Enola Holmes</span>
            </footer>
        </>
    )

}