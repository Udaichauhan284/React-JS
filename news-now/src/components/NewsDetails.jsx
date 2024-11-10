import React from 'react'

const NewsDetails = ({ author, title, description, src, url }) => {
  return (
    <div className='container'>
      {src ? (
        <img src={src} className='card-img' alt='News image' />
      ) : (
        <div className='placeholder-img'>Image Not Available</div>
      )}
      <div className='card-body'>
        <h1>{author ? author : "Unknown Author"}</h1>
        <h4>{title}</h4>
        <p>{description}</p>
        <a href={url} target='_blank' rel='noopener noreferrer' className='btn'>Read More</a>
      </div>
    </div>
  )
}

export default NewsDetails;
