import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img className="w-[500px] mx-auto md:mx-0" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#5dd9dd] font-bold text-xl">
            DATA ANALYTICS DASHBOARD{" "}
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="opacity-80 italic text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
            fugiat ipsa cupiditate, labore itaque culpa sunt earum ea! Placeat,
            sit quos hic esse laudantium neque natus quod distinctio quibusdam
            iure eveniet dignissimos quasi obcaecati laboriosam facere. Minus
            neque pariatur tempora accusamus rem corporis, vel error, numquam
            cumque, nemo saepe illo!
          </p>
          <button className="btn-primary text-white mt-4 max-w-[200px] mx-auto">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
