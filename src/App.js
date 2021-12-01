import React from 'react';
import './App.css';
import Row from './Row';
import requests from './Requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">

      {/*  ******* Nav Bar ******** */}
      <Nav />
      {/* ******* Banner ******** */}
      <Banner />
      {/* <h1>Welcome to first REACT project</h1> */}
      {/* Component to re-use passing to props means property */}
      <Row title="NETFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflix0riginals}
      isLargeRow //={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
