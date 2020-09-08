import React, {forwardRef} from "react";
import "../css/VideoCard.css";
import Results from "./Results";
import {ThumbUpSharp} from "@material-ui/icons"


const base_url = "https://image.tmdb.org/t/p/original/"

const VideoCard = forwardRef(({ movie }, ref) => {
    return(
        <div ref={ref} className="videoCard">

            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="movie img"/>
            <p>{movie.overview}</p>
            <h2>{movie.title || movie.original_name}</h2>
            <p className='videoCard_stats'>
                {movie.media_type && `${movie.media_type} •` }
                {movie.release_date || movie.first_air_date} •
                <ThumbUpSharp />{" "}
            {movie.vote_count} </p>
        </div>

    )

});

export default VideoCard;