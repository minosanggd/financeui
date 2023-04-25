const Newsletter = () => {
  return (
    <div className=" w-full p-16 bg-[#000300] px-4 ">
      <div
        className=" 
        max-w-[1240px] h-full my-20  items-center justify-center  mx-auto  grid md:grid-cols-3 "
      >
        <div className="text-white md:col-span-2 col-span-1 text-center lg:text-start">
          <h1 className=" text-3xl font-bold">
            Want tips & tricks to optimize your flow?
          </h1>
          <p className=" text-xl italic opacity-75 my-4">
            Sign up to our newsletter and stay up to date
          </p>
        </div>

        <div className="flex flex-col w-full  ">
          <div className="flex flex-col lg:flex-row  gap-2 my-4">
            <input
              className="input w-full italic"
              placeholder="Enter your email..."
            />
            <button className="btn-primary text-xl min-w-[150px] h-[50px] flex justify-center items-center">
              Notify Me
            </button>
          </div>
          <div>
            <p className="text-white opacity-70  text-center">
              We care bout the protected of your data. Read our{" "}
              <span className="text-[#5dd9dd] underline decoration-solid ">
                Privacy Police
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
