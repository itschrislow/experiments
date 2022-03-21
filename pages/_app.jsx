import dynamic from "next/dynamic";

import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
