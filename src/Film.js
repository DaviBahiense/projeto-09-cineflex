
export default function Film(){
    return(
        <>
        <div className="spanTop">
            <span >Selecione o horário</span>
        </div>
        <div className="selection">
            <div className="day">
                <span>Quinta-feira - 24/06/2021</span> 
            </div>
            <div className="hour">
                <button>15:00</button>
                <button>19:00</button>
            </div>
            <div className="day">
                <span>Quinta-feira - 25/06/2021</span> 
            </div>
            <div className="hour">
                <button>15:00</button>
                <button>19:00</button>
            </div>
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