import React from 'react';
import './App.css';
import Row from './Row';
import requests from './Requests';



function App() {
  return (
    <div className="App">
      <h1>Welcome to first REACT project</h1>
      {/* Component to re-use passing to props means property */}
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflix0riginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
    </div>
  );
}

export default App;
