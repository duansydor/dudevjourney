'use client'
import React from 'react'
import {useMDXComponent} from "next-contentlayer/hooks"
import Image from "next/image"

const mdxComponets = {
    Image
}

const RenderMdx = ({blog}) => {
    const MDXContent = useMDXComponent(blog.body.code)
    return (
    <div className='px-4 col-span-7 font-in prose prose-lg max-w-max
    prose-blockquote:bg-accent/50 
    prose-blockquote:border-accent
    prose-blockquote:px-6
    prose-blockquote:p-2
    prose-blockquote:not-italic
    prose-blockquote:rounded-r-lg
    prose-li:marker:text-accent

    dark:prose-blockquote:bg-gray/50
    dark:prose-blockquote:border-gray
    dark:prose-blockquote:text-white
    dark:prose-li:marker:text-accentDark
    dark:text-light
    dark:prose-strong:text-light
    dark:prose-code:text-light
    dark:prose-a:text-light
    dark:prose-a:decoration-accentDark
    dark:prose-h1:text-light
    dark:prose-h2:text-light
    dark:prose-h3:text-light
    dark:prose-h4:text-light
    dark:prose-th:text-light
    dark:prose-th:font-bold
    '>
      <MDXContent components={mdxComponets}/>
    </div>
  )
}

export default RenderMdx
