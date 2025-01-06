interface props {
  showIn?: "md" | "lg" | "xl";
}

const LineBreak = ({ showIn }: props) => {
  return <br className={`${showIn && `hidden ${showIn}:inline-block`}`} />;
};

export default LineBreak;
