import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {/*readMore ? info means if readMore is true display the full info; 
          if it's not runs the substring method for 200 characters : `${info.substring(0, 200)}...` */}
          {readMore ? info : `${info.substring(0, 200)}...`}
          {/*inline function () => setReadMore(!readMore) in the brackets means wherever the value of readMore pass the opposite */}
          <button onClick={() => setReadMore(!readMore)}>
            {/*readMore ? 'show less' : 'read more' means if readMore is true display show less on the button or if it's false display read more on the button*/}
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={()=> removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
