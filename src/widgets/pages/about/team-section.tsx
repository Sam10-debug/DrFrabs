/* eslint-disable @next/next/no-img-element */
import { useCallback } from "react";

const imgIds = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const AboutTeamSection = () => {
  const handleFilterArrayForColumns = useCallback((startIndex: number) => {
    return imgIds.filter(
      (_item: number, index: number) =>
        (index - startIndex) % 4 === 0 
    );
  }, []);

  return (
    <section>
      <div className="py-10 md:py-24 content-container">
        <h3 className="uppercase text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
         Our team
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-6 items-start mt-10">
          <div className="grid gap-1 md:gap-6">
            {handleFilterArrayForColumns(0).map((id) => (
              <img
                key={id}
                src={`/platnova-employee-${id}.jpg`}
                alt="platnova"
                className="rounded-2xl"
              />
            ))}
          </div>
          <div className="grid gap-6">
            {handleFilterArrayForColumns(1).map((id) => (
              <img
                key={id}
                src={`/platnova-employee-${id}.jpg`}
                alt="platnova"
                className="rounded-2xl"
              />
            ))}
          </div>
          <div className="md:grid gap-6 hidden">
            {handleFilterArrayForColumns(2).map((id) => (
              <img
                key={id}
                src={`/platnova-employee-${id}.jpg`}
                alt="platnova"
                className="rounded-2xl"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeamSection;
