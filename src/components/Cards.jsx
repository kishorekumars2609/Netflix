import React from "react"
import "./card.css"

const Cards = ({movie}) => {
    return <>
    {
            <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                <div className="cards__overlay">
                    <div className="font-black text-base mb-2">{movie?movie.original_title:""}</div>
                    <div className="text-xs mb-1">
                        {movie?movie.release_date:""}
                    </div>
                   
                </div>
            </div>
        
    }
    </>
}

export default Cards