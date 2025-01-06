import { SVGProps } from "react";

const GreenBankSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="100" height="100" rx="50" fill="#00C7BE" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50.8545 29.118L49.9974 28.6895L49.1403 29.118L29.9736 38.7014L28.9141 39.2311V46.1657H32.7474V65.3322H28.9141V71.0822H71.0807V65.3322H67.2474V46.1657H71.0807V39.2311L70.0212 38.7014L50.8545 29.118ZM59.5807 46.1657H53.8307V65.3322H59.5807V46.1657ZM46.1641 46.1657V65.3322H40.4141V46.1657H46.1641Z"
        fill="white"
      />
    </svg>
  );
};

export default GreenBankSvg;
