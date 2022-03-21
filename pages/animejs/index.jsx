import anime from "animejs";
import { useEffect, useRef } from "react";

const AnimeJS = () => {
  const anime1Ref = useRef();
  const anime2Ref = useRef();

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
    </div>
  );
};

export default AnimeJS;
