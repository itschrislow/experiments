import Link from 'next/link'

export default function Home() {
  return (
    <Link href="/rotating-boxes">
      <p className="text-2xl font-semibold cursor-pointer hover:underline">
        rotating boxes
      </p>
    </Link>
  )
}
