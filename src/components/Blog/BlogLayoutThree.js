import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

function BlogLayoutThree({blog}) {
  return (
    <article className='flex flex-col group'>
        <Link href={blog.url} className='h-full rounded-xl overflow-hidden'>
       <Image
        src={blog.image.filePath.replace("../public", "")}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        width={blog.image.width}
        height={blog.image.height}
        className="w-full h-full object-center 
        object-cover rounded-xl -z-10
        group-hover:scale-105 transition-all ease duration-300
        "
      /> 
      </Link>
      <div className="">
        <span className='uppercase text-accent font-bold'>{`${blog.tags[0]}`}</span>
        <Link href={blog.url} className="mt-6">
          <h1 className="font-bold capitalize text-lg">
            <span
              className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_6px]
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500
              "
            >
              {blog.title}
            </span>
          </h1>
        </Link>
        <span className="capitalize text-dark/50 font-semibold text-base">
            {format(new Date(blog.publishedAt),"MMMM dd, yyyy")}
        </span>
      </div>
    </article>
  )
}

export default BlogLayoutThree
