import { sortBlogs } from "@/utils";
import Link from "next/link";
import BlogLayoutThree from "../Blog/BlogLayoutThree";
function RecentPosts({ blogs }) {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
      <div className="flex w-full justify-between">
        <h2 className=" inline-block font-bold capitalize text-4xl">
          Recent Posts
        </h2>
        <Link
          href="/categories/all"
          className="inline-block font-medium 
          text-accent underline-offset-2 text-lg"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-16 mt-16">
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
