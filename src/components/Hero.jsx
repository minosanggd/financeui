import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white mx-3 mt-[120px] lg:mt-0 ">
      <div
        className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex
      flex-col justify-center items-center"
      >
        <p className="p-2 text-[#5dd9dd] uppercase font-bold">
          Grow with data analytics
        </p>
        <h1 className="md:text-7xl sm:text-6xl font-bold text-4xl">
          Grow with data.
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, flexible financing for{" "}
            <Typed
              className="opacity-60"
              strings={["BTC", "BTB", "SASS"]}
              typeSpeed={180}
              backSpeed={140}
              loop
            />
          </p>
        </div>
        <p className="text-gray-500 font-bold text-2xl mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus eum
          soluta nihil corporis quos esse nobis illum reiciendis voluptate sed.
        </p>

        <button className="btn-primary mt-4">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
