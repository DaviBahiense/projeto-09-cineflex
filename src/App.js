import React from "react"
import Top from "./Top"
import Main from "./Main"
import Film from "./Film"
import Session from "./Session"
import Sucess from "./Success"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {


    const [film, setFilm] = useState("")
    const [final, setFinal] = useState({})
    const [data, setData] = useState([])

    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies")
        promisse.then(f =>
            setFilm(f.data)
        )
    }, [])
    
    if (film.length === 0) {
        return ''
    }

    return (
        <BrowserRouter>
            <Top />
            <Routes>
                <Route path="/" element={<Main film={film} />}></Route>
                <Route path="/sessoes/:idFilme" element={<Film film={film}/>}></Route>
                <Route path="/assentos/:idSessao" element={<Session film={film} setFinal={setFinal} setData={setData}/>}></Route>
                <Route path="/sucesso" element={<Sucess film={film} final={final} data={data}/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}