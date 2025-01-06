import gsap from "gsap";

type AnimationType = "fade-in" | "rotate-in" | "fade";

const useAnimation = () => {
  return {
    animate: (name: AnimationType, options?: gsap.TweenVars) => {
      switch (name) {
        case "fade-in":
          return {
            y: 0,
            stagger: 0.05,
            duration: 0.1,
            opacity: 1,
            ...options,
          };

        case "rotate-in":
          return {
            rotate: 0,
            stagger: 0.05,
            delay: 0.8,
            duration: 0.1,
            opacity: 1,
            
            ...options,
          };

        case "fade":
          return {
            opacity: 1,
            stagger: 0.3,
            duration: 0.3,
            ...options,
          };

        default:
          // do nothing
          return {};
      }
    },
  };
};

export default useAnimation;
