import { cx } from "@/utils";
import Link from "next/link";
function Category({ link = "/", name, active, ...props }) {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-3 px-10 rounded-full capitalize font-semibold border-solid border-dark mr-4 border-2 hover:scale-105",
        props.className,
        active?"bg-dark text-light":"bg-light text-dark"
      )}
    >
      {name}
    </Link>
  );
}

export default Category;
