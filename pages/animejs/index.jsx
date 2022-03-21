import anime from "animejs";
import { useEffect, useRef } from "react";

const AnimeJS = () => {
  const anime1Ref = useRef();
  const anime2Ref = useRef();
  const anime3Ref = useRef();
  const anime4Ref = useRef();
  const anime5Ref = useRef();

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

    anime4Ref.current = anime({
      targets: ".anime4 path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutCubic",
      duration: 1000,
      loop: true,
    });

    anime5Ref.current = anime({
      targets: ".anime5",
      points: [
        { value: "300 300, 300 100, 400 200, 500 300, 300 300" },
        { value: "300 300, 300 100, 500 100, 400 200, 300 300" },
        { value: "400 200, 300 100, 500 100, 500 300, 400 200" },
        { value: "300 300, 400 200, 500 100, 500 300, 300 300" },
        { value: "300 300, 300 100, 500 100, 500 300, 300 300" },
      ],
      easing: "easeOutQuad",
      duration: 2000,
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
      {/* ANIME 4 */}
      <div className="h-16">
        <svg
          ref={anime4Ref}
          xmlns="http://www.w3.org/2000/svg"
          width="48px"
          height="48px"
          viewBox="0 0 48 48"
          className="absolute"
        >
          <g fill="#000000" className="anime4">
            <path
              fill="none"
              stroke="#000000"
              strokeLinecap="square"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M24 10v24"
            />
            <circle
              cx="24"
              cy="7"
              r="3"
              fill="none"
              stroke="#000000"
              strokeLinecap="square"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <path
              d="M17 24a8 8 0 0 1-16 0l8-10z"
              fill="none"
              stroke="#000000"
              strokeLinecap="square"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <path
              fill="none"
              stroke="#000000"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M1 24h16"
            />
            <path
              d="M24 38a6 6 0 0 1 6 6H18a6 6 0 0 1 6-6z"
              fill="none"
              stroke="#000000"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <path
              d="M21.058 7.588l-9.316 1.864a6 6 0 0 1-4.925-1.2L4 6"
              fill="none"
              stroke="#000000"
              strokeLinecap="square"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <path
              d="M31 24a8 8 0 0 0 16 0l-8-10z"
              fill="none"
              stroke="#000000"
              strokeLinecap="square"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <path
              fill="none"
              stroke="#000000"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M47 24H31"
            />
            <path
              d="M26.942 7.588l9.316 1.864a6 6 0 0 0 4.925-1.2L44 6"
              fill="none"
              stroke="#000000"
              strokeLinecap="square"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
      {/* ANIME 5 */}
      <svg width="600" height="600" className="relative">
        <polygon
          stroke="none"
          fill="#e0e7ff"
          points="300 300, 300 100, 500 100, 500 300, 300 300"
          className="absolute"
        />
        <polygon
          stroke="none"
          fill="#c7d2fe"
          points="325 275, 325 125, 475 125, 475 275, 325 275"
          className="absolute"
        />
        <polygon
          stroke="none"
          fill="#a5b4fc"
          points="350 250, 350 150, 450 150, 450 250, 350 250"
          className="absolute"
        />
        <polygon
          ref={anime5Ref}
          stroke="#4338ca"
          fill="none"
          points="300 300, 300 100, 500 100, 500 300, 300 300"
          className="absolute anime5"
        />
      </svg>
    </div>
  );
};

export default AnimeJS;
