import React, { useState, useEffect } from 'react'
import axios from "./axios";
import requests from './Requests';


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
        <header className="banner"> 
            <div className="banner_contents">
            {/*  background image  */}

            {/* title */}
            {/* div 2 buttons play & my list */}
            {/* description */}
            </div>
        </header>
    )
}

export default Banner
