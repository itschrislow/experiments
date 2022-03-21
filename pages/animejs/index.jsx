import anime from "animejs";
import { useEffect, useRef } from "react";

const AnimeJS = () => {
  const anime1Ref = useRef();
  const anime2Ref = useRef();
  const anime3Ref = useRef();

  useEffect(() => {
    anime1Ref.current = anime({
      targets: ".anime1",
      width: "100%",
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
    });

    anime2Ref.current = anime({
      targets: ".anime2",
      keyframes: [
        { translateY: 40 },
        { translateX: 40 },
        { translateY: -40 },
        { translateX: -40 },
        { translateY: 40 },
        { translateX: 0 },
        { translateY: 0 },
      ],
      duration: 6000,
      loop: true,
    });

    anime3Ref.current = anime({
      targets: ".anime3",
      translateX: function (el, i) {
        return 150 + 150 * i;
      },
      translateY: function (el, i) {
        return 50 + -50 * i;
      },
      scale: function (el, i, l) {
        return l - i + 0.5;
      },
      rotate: function () {
        return anime.random(-360, 360);
      },
      borderRadius: function () {
        return ["50%", anime.random(10, 45) + "%"];
      },
      duration: function () {
        return anime.random(1200, 1800);
      },
      delay: function () {
        return anime.random(0, 400);
      },
      direction: "alternate",
      loop: true,
    });
  }, []);

  return (
    <div className="px-10 w-full h-full flex flex-col items-center">
      {/* ANIME 1 */}
      <div ref={anime1Ref} className="anime1 w-10 h-10 bg-blue-500" />
      {/* ANIME 2 */}
      <div className="relative">
        <div className="absolute w-10 h-10 bg-green-100 rounded-full" />
        <div
          ref={anime2Ref}
          className="anime2 w-10 h-10 bg-green-500 rounded-full"
        />
      </div>
      {/* ANIME 3 */}
      <div className="relative w-full h-40 items-center">
        <div className="absolute flex flex-col gap-4">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="w-10 h-10 bg-red-100 rounded-full" />
            ))}
        </div>
        <div className="absolute flex flex-col gap-4">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                ref={anime3Ref}
                className="anime3 w-10 h-10 bg-red-500 rounded-full"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AnimeJS;
