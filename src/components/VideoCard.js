import React from "react";
import "../css/VideoCard.css";
import Results from "./Results";

const base_url = "https://image.tmdb.org/t/p/original/"

function VideoCard({ movie }) {
    return(
        <div className="videoCard">

            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="movie img"/>
            <p>{movie.overview}</p>
            <h2>{movie.title}</h2>
            <p>{movie.vote_count} {movie.relase_date}</p>
        </div>

    )

}

export default VideoCard;