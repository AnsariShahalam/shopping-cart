import React from 'react'
import list from '../Data'
import '../styles/amazon.css'
import Cards from './Cards'

const Amazon = ({handleClick}) => {
  return (
    <>
    <section>
      {
      list.map((item)=>(
        <Cards item={item} handleClick={handleClick} key={item.id} />
      ))
    }
    </section>
    </>
  )
}

export default Amazon