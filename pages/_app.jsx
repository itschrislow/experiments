import Link from 'next/link'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col items-center min-h-screen pb-10">
      <Link href="/">
        <h1 className="sticky top-0 py-10 text-3xl font-bold bg-white cursor-pointer">
          Three.js Experiments
        </h1>
      </Link>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
