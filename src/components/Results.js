import React, {useState} from "react";
import "../css/Results.css";
import VideoCard from './VideoCard'
import {useEffect} from "react";
import axios from "./axios"
import FlipMove from "react-flip-move";
// import requests from "../requests";


function Results({ selectedOption }){

    const [movies, setMovies] = useState([])

    useEffect(()=>{
        async function fetchData() {
               const request = await axios.get(selectedOption);
               setMovies(request.data.results);
            console.log(request)
               return request
        }

        fetchData();
    },[selectedOption])

    return (
        <div className="results">
            <FlipMove>
            {movies.map((movie)=>(
                <VideoCard key={movie.id} movie={movie} />
            ))}
            </FlipMove>
        </div>

    )

}

export default Results;