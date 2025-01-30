import React, { useEffect,useState } from 'react'
import "./LiveUpdates.css"
const LiveUpdates = () => {

    const [newsArticles, setNewsArticles] = useState([]); // State for news articles

    useEffect(()=>{
        const socket = new WebSocket('ws://localhost:8088/news?language=en');

        socket.onmessage = ({ data }) => {
            try {
                const message = JSON.parse(data); // Parse the received JSON data
                console.log(message); // Log the message to check its structure
        
                if (message.results && message.results.length > 0) {
                  const newArticles = message.results; // Get the articles from the results array
                  setNewsArticles((prevArticles) => [...newArticles, ...prevArticles]); // Add new articles to the top
                }
              } catch (error) {
                console.error('Error parsing WebSocket message:', error);
              }
          };

          return () => {
            socket.close();
          };
    },[])
  return (
    <div>
    <h1>Latest News</h1>
    <div className="card-container">
      {newsArticles.map((article, index) => (
        <div className="card" key={index}>
          <h3 className="card-title">{article.title}</h3>
          <p className="card-description">{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="card-link">
            Read more
          </a>
        </div>
      ))}
    </div>
  </div>
  )
}

export default LiveUpdates
