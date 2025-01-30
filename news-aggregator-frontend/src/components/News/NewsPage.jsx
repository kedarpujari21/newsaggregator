import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./NewsPage.css"
const NewsPage = () => {
    const navigate = useNavigate();
    const [favourites, setFavourites] = useState(()=>{
        const storedFavourites = localStorage.getItem('favourites')
        return storedFavourites ? JSON.parse(storedFavourites):[] ;
    });
    const newsLinks =[
        {name: 'NDTV' , url:'https://www.ndtv.com', logo: 'src/assets/ndtv.png'},
        {name: 'BBC' , url:'https://www.bbc.com', logo: 'src/assets/bbc.png'},
        {name: 'CNN' , url:'https://www.cnn.com', logo: 'src/assets/cnn.png'},
        {name: 'ABP News' , url:'https://www.abplive.com', logo: 'src/assets/abp.png'},
        { name: 'Punekar News', url: 'https://www.punekarnews.in', logo: 'src/assets/punekarnews.png' },
        {name: 'ABP Majha' , url:'https://www.marathi.abplive.com', logo: 'src/assets/abpmaza.png'}
    ];

    const addToFavourites = (newsItem) =>{
        if (!favourites.find((item) => item.url === newsItem.url)){
             const updatedFavourites = [...favourites, newsItem];
             setFavourites(updatedFavourites);
             localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
        } else{
            alert(`${newsItem.name} is already in your Favourite List`)
        }
    };

    const navigateToFavourites=()=>{
        navigate('/favorites')
    }
  return (
    <div className='card-container'>
    {newsLinks.map((link, index) => {
        return (
            <div className='card' key={index} onClick={() => window.location.href = link.url}>
                <img className='card-image' src={link.logo} alt={link.name} />
                <div className='card-content'>
                    <h6>{link.name}</h6>
                    <button className="favorite-btn" onClick={() => addToFavourites(link)}>
                      Add to Favorites
                    </button>
                </div>
            </div>
        );
    })}
    <button className='view-favourites-btn' onClick={navigateToFavourites}>
        View Favourites
      </button>
</div>
  )
}

export default NewsPage
