import Header from "./components/Header.jsx"
import MovieCard from "./components/MovieCard.jsx"

import { useEffect } from "react"
import { useState } from "react"

function App() {

  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <>
      <Header/>
      <main>
        <MovieCard></MovieCard>
       
      </main>
      </>
  )
}

async function fetchTitles() {
  const url = 'https://api.imdbapi.dev/titles'; // Example API endpoint
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const dataVariable = await response.json(); 
    
    console.log(dataVariable); 
    return dataVariable;

  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

export default App
