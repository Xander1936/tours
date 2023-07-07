import React from 'react';
import Tour from './Tour';

{/* Pass tours and removeTour as props
    on the Tours component */}

const Tours = ({tours, removeTour}) => {
  return (
    <section>
      <div className='title'>
        <h2>Our tours</h2>
        <div className='underline'></div>
      </div>
      {/* Map all the tours from the API Array on the Tours Main component 
      with the removeTour function */}
      <div>
        {tours.map((tour) => {
          return (
            <Tour key={tour.id}{...tour} 
            removeTour={removeTour} />
          )
        })}
      </div>
    </section>
  ) 
};

export default Tours;
