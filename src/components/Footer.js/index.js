"use client";
import siteMetadata from "@/utils/siteMetaData";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <footer className="w-full mt-16 rounded-2xl flex flex-col items-center justify-center pb-16 bg-slate-100 dark:bg-dark dark:text-light">
      <h3 className="mt-16 font-medium text-center capitalize text-4xl px-4">Interesting Stories | Updates | Guides</h3>
      <p className="w-full text-center px-4">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 min-w-[384px] flex items-stretch p-2 rounded mx-4">
        <input
        className="bg-transparent placeholder:text-dark dark:placeholder:text-light  w-full mr-2 pb-2 form-input border-accent/50 dark:border-accentDark/50  border-b-2 border-t-0 border-l-0 border-r-0 focus:ring-0 focus:border-accent"
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true, maxLength: 80 })}
        />

        <input type="submit" className="bg-dark text-light p-2 rounded-md"/>
      </form>
      <div className="flex gap-3 pt-8">
        <a href={`${siteMetadata.github}`} className="text-lg" target="BLANK">
          <FaGithub  fontSize={30}/>
        </a>
        <a href={`${siteMetadata.instagram}`} target="BLANK">
          <FaInstagram fontSize={30}/>
        </a>
        <a href={`${siteMetadata.linkedin}`} target="BLANK">
          <FaLinkedin fontSize={30}/>
        </a>
      </div>
      <div className="pt-8 flex flex-col items-center">
        <span>&copy;2024 DuDevJourney. All rights reserved.</span>
        <Link className="font-semibold" href="/sitemap.xml">
            Site Map
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
