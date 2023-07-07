import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'


function App() {
const [loading, setLoading] = useState(false);
const [tours, setTours] = useState([]);

// Remove Tour Function
const removeTour = (id) => {
  const newTours = tours.filter((tour) => tour.id !== id);
  setTours(newTours);

}

// Fetching the Data from the API
const fetchTours = async () => {
  setLoading(true);
  try {
    const response = await fetch(url);
    const tours = await response.json();
    setLoading(false);
    setTours(tours);
  } catch(error) {
    setLoading(false);
    console.log(error);
  }
  console.log(tours);
};

useEffect(() => {
  fetchTours();
},[]);

if (loading) {
  return (
    <main>
      <Loading />
    </main>
  );
}
if (tours.length === 0) {
  return (
    <main>
      <div className='title'>
        <h2>no tours left.</h2>
        {/* Refresh the page and loads new page's tours */}
        <button className='btn' onClick={() => fetchTours()} >
          Refresh
        </button>
      </div>
    </main>
  )
}


return (
  <main>
    {/* Pass tours as a prop
      on the Tours component */}
    <Tours tours={tours} removeTour={removeTour} />
  </main>
)
}

export default App;
