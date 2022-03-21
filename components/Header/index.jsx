import Link from "next/link";

export default function Header({ title }) {
  return (
    <Link href="/">
      <h1 className="sticky top-0 z-50 py-10 w-full text-3xl text-center font-bold bg-white cursor-pointer">
        {title}
      </h1>
    </Link>
  );
}
