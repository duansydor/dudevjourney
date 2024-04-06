import { cx } from "@/utils";
import Link from "next/link";
function Tag({ link = "#", name, ...props }) {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-3 px-10 bg-dark text-light rounded-full capitalize font-semibold border-solid border-light border-2 hover:scale-105",
        props.className
      )}
    >
      {name}
    </Link>
  );
}

export default Tag;
