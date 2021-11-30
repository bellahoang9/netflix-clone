import React, { useState, useEffect } from 'react'
import axios from "./axios";
import requests from './Requests';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);
    // give the random movie everytime we refesh

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflix0riginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)]);

            // Math.floor(Math.random() * request.data.results.length - 1);
        }
        fetchData()
    }, []);

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center",
            }}
        > 
            <div className="banner_contents">
            {/*  background image  */}
            {/* title */}
            <h1 className="banner_title">
                 {movie?.title || movie?.name || movie?.original_name}  {/* if movie title doesn't exist then look for name or original name */}
            </h1>
            {/* div 2 buttons play & my list */}
            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>

            </div>
        
            {/* description */}
            <h1 className="banner_description">{movie?.overview}</h1>
            </div>
        </header>
    )
}

export default Banner
