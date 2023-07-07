import React, { useState } from 'react';

// Set Up the Single Tour Component 
// With all the props of id, image, info, price, name and removeTour

const Tour = ({id, image, info, price, name, removeTour}) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {/* readMore ? info means if readMore true display the full info;
          if it's not run the substring() method for 200 characters:
          `${info.substring(0, 200)} ...` */}
          {readMore ? info : `${info.substring(0, 200)}...`}
          {/* inline function () => setReadMore(!readMore);
          !readMore means whenever the value of readMore, pass the opposite*/}
          <button onClick={() => setReadMore(!readMore)}>
            {/* readMore ? 'show less' : 'read more' 
            means if readMore is true display 'show less' on the button else display 'read more' */}
            {readMore ? 'show less' : 'read more'}
          </button>
          
        </p>
        {/* Add the removeTour function to the "Not Interested's" Button */}
        <button className='delete-btn' onClick={() => removeTour(id) }>
          Not Interested
        </button>
      </footer>
    </article>
  )
  
};

export default Tour;
