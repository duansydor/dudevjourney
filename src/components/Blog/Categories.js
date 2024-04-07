import React from 'react'
import Category from './Category'
import { slug } from 'github-slugger'

const Categories = ({categories, currentSlug}) => {
  return (
    <div className='px-20 py-4 mt-10 border-t-2  text-dark dark:text-light border-b-2 border-solid border-dark flex items-start flex-wrap
    font-medium mx-10 dark:border-light 
    '>
      {
        categories.map(cat =><Category key={cat} link={`${cat}`} name={cat}
         active={currentSlug === slug(cat)}
         />)
      }
    </div>
  )
}

export default Categories
