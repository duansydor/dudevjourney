import { sortBlogs } from "@/utils";
import Link from "next/link";
import BlogLayoutThree from "../Blog/BlogLayoutThree";
function RecentPosts({ blogs }) {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
      <div className="flex w-full justify-between">
        <h2 className=" inline-block font-bold capitalize text-4xl dark:text-light">
          Recent Posts
        </h2>
        <Link
          href="/categories/all"
          className="inline-block font-medium 
          text-accent underline-offset-2 text-lg dark:text-accentDark"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-16 mt-16 md:grid-cols-2 lg:grid-cols-3">
        {
          sortedBlogs.slice(5,11).map((blog,index)=>{
            return(
              <article key={index}>
                  <BlogLayoutThree blog={blog}/>
              </article>
            );
          })
        }
      </div>
    </section>
  );
}

export default RecentPosts;
