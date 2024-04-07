import React from "react";
import { allBlogs } from "contentlayer/generated";
import GithubSlugger, { slug } from "github-slugger";
import Categories from "@/components/Blog/Categories";
import BlogLayoutThree from "@/components/Blog/BlogLayoutThree";

const slugger = new GithubSlugger();
export async function generateStaticParams() {
  const categories = [];
  const paths = [{ slug: "all" }];

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        let slugfied = slugger.slug(tag);
        if (!categories.includes(slugfied)) {
          categories.push(slugfied);
          paths.push({ slug: slugfied });
        }
      });
    }
  });
  return paths;
}
export async function generateMetadata({ params }) {
  return {
    title: `${params.slug.replaceAll("-"," ")} Blogs`,
    description: `Learn more about ${params.slug === "all"?"web development":params.slug} through our collection of expert blogs and tutorials`,
  };
}
const CategoryPage = ({ params }) => {
  const allCategories = ["all"];
  const blogs = allBlogs.filter((blog) => {
    return blog.tags.some((tag) => {
      const slugfied = slug(tag);
      if (!allCategories.includes(slugfied)) {
        allCategories.push(slugfied);
      }
      if (params.slug === "all") {
        return true;
      }
      return slugfied === params.slug;
    });
  });

  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className="px-32 flex flex-col">
        <h1 className="mt-16 font-semibold text-5xl">#{params.slug}</h1>
        <span className="mt-2 inline-block">
          discover more categories and expadn your knowledge
        </span>
      </div>
      <Categories
        className="flex flex-col items-center"
        categories={allCategories}
        currentSlug={params.slug}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-24 px-8">
        {blogs.map((blog, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree blog={blog} />
            </article>
          );
        })}
      </div>
    </article>
  );
};

export default CategoryPage;
