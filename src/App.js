import react from "react"
import Top from "./Top"
import Main from "./Main"
import Film from "./Film"
import Session from "./Session"
import Sucess from "./Success"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(){ 
    return(
        <BrowserRouter>
            <Top />
            <Routes>
               <Route path="/" element={<Main />}></Route>
               <Route path="/film" element={<Film />}></Route>
               <Route path="/session" element={<Session />}></Route>
               <Route path="/Success" element={<Sucess />}></Route>
               
            </Routes>
        </BrowserRouter>
        
        
    )
}