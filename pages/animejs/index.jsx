import anime from "animejs";
import { useEffect, useRef } from "react";

const AnimeJS = () => {
  const anime1Ref = useRef();

  useEffect(() => {
    anime1Ref.current = anime({
      targets: ".anime1",
      width: "100%",
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
    });
  }, []);

  return (
    <div className="px-10 w-full h-full flex flex-col items-center">
      {/* ANIME 1 */}
      <div ref={anime1Ref} className="anime1 w-10 h-10 bg-blue-500" />
    </div>
  );
};

export default AnimeJS;
