import React from 'react'
import Carousel from "./Carousel"
import NewsItem from "./NewsItem"

function Home() {
  return (
    <div>
        <Carousel/>
        <div className='News container'>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
        </div>
    </div>
  )
}

export default Home