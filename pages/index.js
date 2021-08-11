import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen pb-10">
      <h1 className="sticky top-0 py-10 text-3xl font-bold bg-white">
        Three.js Experiments
      </h1>
      <Link href="/">
        <p className="text-2xl font-semibold cursor-pointer hover:underline">
          rotating boxes
        </p>
      </Link>
    </div>
  )
}
