const AppLayoutCutout: React.FC<{ type: "top" | "bottom" }> = ({ type }) =>
  type === "bottom" ? (
    <svg
      width="100%"
      viewBox="0 0 1440 185"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M215.47 59.6613H0V0H1440V185L417.703 185C403.905 185 390.528 180.244 379.827 171.534L325.113 127L244.688 69.0862C236.178 62.9584 225.956 59.6613 215.47 59.6613Z"
        className="fill-[#E9E9E9]/30"
      />
    </svg>
  ) : (
    <div className="bg-[#E9E9E9]/30">
      <svg
        width="100%"
        viewBox="0 0 1440 185"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M215.47 59.6613H0V0H1440V185L417.703 185C403.905 185 390.528 180.244 379.827 171.534L325.113 127L244.688 69.0862C236.178 62.9584 225.956 59.6613 215.47 59.6613Z"
          className="fill-white"
        />
      </svg>
    </div>
  );

export default AppLayoutCutout;
