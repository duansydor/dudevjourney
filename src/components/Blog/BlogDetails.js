import { format, parseISO } from "date-fns";
import { slug } from "github-slugger";
import Link from "next/link";

const BlogDetails = ({ blog, slug: BlogSlug }) => {
  return (
    <div className="text-light px-10 flex items-center justify-around flex-wrap text-xl mx-10 rounded-lg bg-accent/70 font-bold py-2">
      <time className="m-3">{format(parseISO(blog.publishedAt), "LLLL d, yyyy")}</time>
      <span className="m-3">Views</span>
      <div className="m-3">{blog.readingTime.text}</div>
      <Link href={`/categories/${slug(blog.tags[0])}`} className="m-3">#{blog.tags[0]}</Link>
    </div>
  );
};

export default BlogDetails;
