const Heading = ({ text }) => {
  return (
    <h1 className="text-center text-xl md:text-2xl lg:text-4xl font-bold">
    
      <span className="text-black">{text}</span>
    </h1>
  );
};

export default Heading;
