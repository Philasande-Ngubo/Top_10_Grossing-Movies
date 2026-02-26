import Header from "./components/Header.jsx"
import MovieCard from "./components/MovieCard.jsx"

import { useEffect } from "react"
import { useState } from "react"

function App() {

  const [data, setData] = useState([]);
  useEffect(() => {
    fetchTitles()
  }, []);


  async function fetchTitles() {
  const url = 'https://api.imdbapi.dev/titles'; // Example API endpoint
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const dataVariable = await response.json(); 
    console.log(dataVariable)
    setData(dataVariable.titles); 
    return dataVariable;

   } catch (error) {
     console.error('There has been a problem with your fetch operation:', error);
   }
  }

  

  const movies = data.map(movie_data=>{

    
    return ( <MovieCard 
             key = {movie_data.id}
             title  = {movie_data.primaryTitle}
             imgSrc = {movie_data.primaryImage.url}
             year = {movie_data.startYear}
             type = {movie_data.genres.join(", ") }
             plot = {movie_data.plot}
             ratings = { "rating" in movie_data ? movie_data.rating.aggregateRating: "-"}
    />)}
  )
  
  return (
    <>
      <Header/>
      <main>
        { data.length!=0 ? movies : <p className="loading" ><i>Loading...</i></p> }
       
      </main>
      </>
  )
}



export default App
