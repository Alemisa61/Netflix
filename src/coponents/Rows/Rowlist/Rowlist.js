import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utilities/requests';

export default function Rowlist() {
  return (
    <>
      <Row
        fetchURL="/discover/movie?api_key=b0f5a4ec28b790fee4a8781dab218fa8&with_genres=28"
        title=" ALEMISA DEVELOPED  YOU A NETFLIX PLEASE ENJOY IT"
        isLargeRow= {true}
      />
      <Row fetchURL= {requests.fetchComedyMovies} 
      title= "THIS IS COMEDY MOVIE"
      isLargeRow={false}/>
      <Row fetchURL={requests.fetchDocumentaries} 
      title= 'THESE ARE DOMUNTERIES ' isLargeRow={false}/>
      <Row  fetchURL={requests.fetchHorrorMovies} 
      title= " DO NOT WATCH THESE MOVIES IN DARK THE ARE BAD!!!! "
      isLargeRow={false}/>
      <Row fetchURL={requests.fetchNetflixOriginals} title= "THESE ARE ORIGINAL MOVIE NETFLIX " isLargeRow={false}/>
      <Row fetchURL={requests.fetchTopRatedMovies}  
      title=  " THESE MOVIES ARE TOPRATED MOVIES DON'T MISSS THEM"
      isLargeRow={false}/>    
      </>
  );
}
