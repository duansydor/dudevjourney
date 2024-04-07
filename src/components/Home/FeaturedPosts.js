import { sortBlogs } from "@/utils";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";

function FeaturedPosts({ blogs }) {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center dark:text-light">
      <h2 className="w-full inline-block font-bold capitalize text-4xl">
        Featured Posts
      </h2>
      <div className="grid grid-cols-1 grid-rows-2 gap-6 mt-16 lg:grid-cols-2">
        <article className="col-span-2 row-span-2 relative lg:col-span-1">
          <BlogLayoutOne blog={sortedBlogs[1]} />
        </article>
        <article className="col-span-2 row-span-1 relative lg:col-span-1">
          <BlogLayoutTwo blog={sortedBlogs[2]} />
        </article>
        <article className="col-span-2 row-span-1 relative lg:col-span-1">
          <BlogLayoutTwo blog={sortedBlogs[3]} />
        </article>
      </div>
    </section>
  );
}

export default FeaturedPosts;
