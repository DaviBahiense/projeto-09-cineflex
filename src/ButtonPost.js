import React from 'react';
import axios from 'axios';

export default function Button({obj}){
    function postObj(){
        axios.post('https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many', obj)
    }
    return(
        <button onClick={()=>obj ? postObj() : ""}>Reservar assento(s)</button>
    )
}