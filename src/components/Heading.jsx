const Heading = ({ text }) => {
  return (
    <h1 className="text-center text-xl md:text-3xl lg:text-5xl pt-10 pb-4 font-robo font-bold text-black">
      {text}
    </h1>
  );
};

export default Heading;
