import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-16 rounded-full overflow-hidden border border-solid border-dark dark:border-light dark:bg-light">
        <Image
          src="/profile-img.png"
          alt="profile"
          width={100}
          height={100}
          className="w-full h-auto rounded-full "
        />
      </div>
      <span className="font-bold text-xl ml-4 dark:text-light">DuDevJourney</span>
    </Link>
  );
}

export default Logo;
