import {Link} from "react-router-dom"


export default function Main({ film }) {

    return (
        <div className="filmsContent">
            <div className="spanTop">
                <span >Selecione o filme</span>
            </div>
            <div className="films">
                {film.map((f, i) =>
                    <Link to={`/sessoes/${i}`} key={i}>
                        <div className="film">
                            <img src={f.posterURL} alt={f.title} />
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}
