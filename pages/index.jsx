import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/rotating-boxes">
        <p className="my-2 text-2xl font-semibold cursor-pointer hover:underline">
          rotating boxes
        </p>
      </Link>
      <Link href="/3d-text">
        <p className="my-2 text-2xl font-semibold cursor-pointer hover:underline">
          3D text
        </p>
      </Link>
    </>
  );
}
