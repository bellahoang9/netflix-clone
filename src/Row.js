// rfce
import React, { useState, useEffect } from 'react'
import axios from "./axios";
import "./Row.css";
import YouTube from 'react-youtube';
// npm i react-youtube
import movieTrailer from 'movie-trailer';
// npm i movie-trailer

const base_url = "https://image.tmdb.org/t/p/original/"; 

// props 
function Row({ title, fetchUrl, isLargeRow }) {
    // state is shorting time memory way to write variable in react
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('');

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
    // console.table(movies)
    const opts = {
        height:'390',
        width: '100%',
        playrVars: {
            //https://devlopers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');

        } else {
            movieTrailer(movie?.name || '')
            .then((url) => {
                // https://www.youtube.com/watch?v=-cMqr9HpZ-Y
                const urlParams = new URLSearchParams( new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch((error) => console.log(error));
        }
    };
    return (
        <div className="row">
            {/* title */}
            <h2>{title}</h2>
            {/* container -> poster */}
            <div className="row__posters">
            {/* several rowposter */}

                {movies.map(movie => (

                <img
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}/>
            ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}


        </div>
    )
}

export default Row
