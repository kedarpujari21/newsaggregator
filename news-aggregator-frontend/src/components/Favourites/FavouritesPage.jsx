import React, { useEffect, useState } from 'react'
import "./FavouritesPage.css"

const FavouritesPage = () => {

  const [favourites, setFavourites] = useState([]);

  useEffect(()=>{
    const storedFavourites = localStorage.getItem('favourites');
    if(storedFavourites){
      setFavourites(JSON.parse(storedFavourites));
    }
  },[]);
  return (
    <div>
      <h1>Your Favourites</h1>
      {favourites.length > 0 ?(
           <div className='card-container'>
            {favourites.map((fav, index)=>(
              <div className='card' key={index}>
                <img className='card-image' src={fav.logo} alt={fav.name} loading='lazy'/>
                <div className="card-content">
                <h6>{fav.name}</h6>
                <a href={fav.url} target="_blank" rel="noopener noreferrer">
                  Visit Site
                </a>
              </div>
              </div>
            ))}
           </div>
      ) : (
        <h3>No Favourites Added Yet!</h3>
      )}
    </div>
  );
};

export default FavouritesPage
