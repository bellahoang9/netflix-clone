// rfce
import React, { useState, useEffect } from 'react'
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/"; 

// props 
function Row({ title, fetchUrl }) {
    // state is shorting time memory way to write variable in react
    const [movies, setMovies] = useState([])

    // A snippest of code which runs based on a specific condition/variable

    useEffect(() => {
    // if [],run once when the row loads, and don't run again
        async function fetchData() {
            // wait for the promise/answer to come back
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;                
        }
        fetchData();
    },[fetchUrl]);
    console.table(movies)
    return (
        <div className="row">
            {/* title */}
            <h2>{title}</h2>
            {/* container -> poster */}
            <div className="row_posters">
            {/* several rowposter */}

                {movies.map(movie => (

                <img
                    className="row_posters"
                    src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
            ))}
            </div>
            


        </div>
    )
}

export default Row
