import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Link href="/rotating-boxes">
        <p className="my-2 text-2xl font-semibold cursor-pointer hover:underline">
          rotating boxes
        </p>
      </Link>
      <Link href="/scrolling-html">
        <p className="my-2 text-2xl font-semibold cursor-pointer hover:underline">
          scrolling html (failed)
        </p>
      </Link>
    </>
  )
}
