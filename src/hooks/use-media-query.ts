import { useState, useEffect } from "react";

export const MediaQueryBreakPoints = {
  mobile: "(max-width: 640px)",
  tablet: "(min-width: 640px) and (max-width: 1024px)",
  desktop: "(min-width: 768px)",
  tabletAndBelow: "(max-width:800px)",
};

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);


  useEffect(()=> {
    setMatches(window.matchMedia(query).matches)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const handleUpdateMatches = () => setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener("change", handleUpdateMatches);

    // Clean up event listener on component unmount
    return () => {
      mediaQueryList.removeEventListener("change", handleUpdateMatches);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
