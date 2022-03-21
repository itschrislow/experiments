import Link from "next/link";

export default function Nav() {
  const data = [
    {
      lib: "threejs",
      experiments: ["3d-text", "haunted-house", "rotating-boxes"],
    },
    { lib: "animejs", experiments: ["basics", "staggering"] },
  ];

  return (
    <div className="mx-auto text-left">
      {data.map((item) => {
        return (
          <>
            <p className="my-2 text-2xl font-semibold">{item.lib}</p>
            <div className="pl-10">
              {item.experiments.map((experiment) => {
                return (
                  <Link href={`${item.lib}/${experiment}`}>
                    <p className="my-2 text-2xl font-semibold cursor-pointer hover:underline">
                      {experiment}
                    </p>
                  </Link>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
}
