import { sortBlogs } from "@/utils";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";

function FeaturedPosts({ blogs }) {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-16 md:mt-32 px-8 flex flex-col justify-center items-center dark:text-light">
      <h2 className="w-full inline-block font-bold capitalize text-4xl">
        Featured Posts
      </h2>
      <div className="grid grid-cols-2 grid-rows-2 w-[40vh] gap-6 mt-16 lg:grid-cols-2 lg:w-full">
        <article className=" relative row-span-1 col-span-2 md:col-span-1 md:row-span-2">
          <BlogLayoutOne blog={sortedBlogs[1]} />
        </article>
        <article className="col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={sortedBlogs[2]} />
        </article>
        <article className="col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={sortedBlogs[3]} />
        </article>
      </div>
    </section>
  );
}

export default FeaturedPosts;
