import React from 'react'
import img2 from '../assests/images/2.webp';
import img3 from '../assests/images/3.webp';
import '../components/News.css'
import styled from 'styled-components';
import AboutItem from './AboutItem';
import NewsItem from './NewsItem'
import AboutHeader from './AboutHeader';
import Pagination from 'react-bootstrap/Pagination'
function News() {
  return (
      <div>
         <AboutHeader/>
        <div className='container'>
        <div className='News'>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
        </div>
        <Pagination>
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Ellipsis />

  <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>{11}</Pagination.Item>
  <Pagination.Item active>{12}</Pagination.Item>
  <Pagination.Item>{13}</Pagination.Item>
  <Pagination.Item disabled>{14}</Pagination.Item>

  <Pagination.Ellipsis />
  <Pagination.Item>{20}</Pagination.Item>
  <Pagination.Next />
</Pagination>
    </div>
      </div>
  )
}

export default News