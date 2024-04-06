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
    <div className='col-span-8 font-in prose prose-lg max-w-max
    prose-blockquote:bg-accent/50 
    prose-blockquote:border-accent
    prose-blockquote:px-6
    prose-blockquote:p-2
    prose-blockquote:not-italic
    prose-blockquote:rounded-r-lg

    prose-li:marker:text-accent
    '>
      <MDXContent components={mdxComponets}/>
    </div>
  )
}

export default RenderMdx
