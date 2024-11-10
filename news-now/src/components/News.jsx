import React, { useEffect, useState } from 'react'
import NewsDetails from './NewsDetails'
const News = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=2c03ba06073348ec948e207d2bfa95b0');
    const jsonData = await response.json();
    setArticles(jsonData.articles || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='news-grid'>
      {articles.map((news, index) => {
        return <NewsDetails 
                key={index}
                author={news.author}
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
      })}
    </div>
  )
}

export default News