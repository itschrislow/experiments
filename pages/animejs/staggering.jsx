import anime from "animejs";
import { useEffect, useRef } from "react";

import Header from "../../components/Header";

export default function Staggering() {
  const anime1Ref = useRef();
  const anime2Ref = useRef();
  const anime3Ref = useRef();

  const autoPlay = () => {
    anime2Ref.current = anime
      .timeline({
        targets: ".anime2",
        easing: "easeInOutQuad",
        complete: autoPlay,
      })
      .add({
        scale: [
          { value: 0.1, easing: "easeInOutSine", duration: 500 },
          { value: 1, easing: "easeInOutQuad", duration: 500 },
        ],
        delay: anime.stagger(200, {
          grid: [10, 10],
          from: anime.random(0, 99),
        }),
      });
  };

  const triggerStaggering = (i) => {
    anime3Ref.current = anime({
      targets: ".anime3",
      scale: [
        { value: 0.1, easing: "easeInOutSine", duration: 500 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(200, {
        grid: [10, 10],
        easing: "easeInOutQuad",
        from: i,
      }),
    });
  };

  useEffect(() => {
    anime1Ref.current = anime({
      targets: ".anime1",
      translateX: 270,
      rotate: anime.stagger([-360, 360]),
      delay: anime.stagger(10, { delay: 100, from: "center" }),
      easing: "easeInOutQuad",
      loop: true,
    });

    autoPlay();
  }, []);

  return (
    <>
      <Header title="AnimeJS" />
      {/* ANIME 1 */}
      <div className="mx-auto pb-10 text-left text-medium text-lg">
        <div className="h-full">
          <h2>Basic Staggering</h2>
          <div className="flex flex-col gap-4">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  ref={anime1Ref}
                  className="anime1 h-4 w-4 bg-yellow-500"
                />
              ))}
          </div>
        </div>
        {/* ANIME 2 */}
        <div>
          <h2>Autoplay</h2>
          <div className="grid grid-rows-10 grid-cols-10 gap-0.5">
            {Array(100)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  ref={anime2Ref}
                  className="anime2 h-4 w-4 bg-yellow-500"
                />
              ))}
          </div>
        </div>
        {/* ANIME 3 */}
        <div>
          <h2>Click to trigger staggering</h2>
          <div className="grid grid-rows-10 grid-cols-10 gap-0.5">
            {Array(100)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  ref={anime3Ref}
                  onClick={() => triggerStaggering(i)}
                  className="anime3 h-4 w-4 bg-red-500"
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
