import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return (
    <div className="bg-white w-full py-[10rem] px-4 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8  ">
        <div className=" rounded-lg shadow-xl text-center p-6 hover:translate-y-[-10px] hover:scale-105 duration-300 transition-all mb-[100px] md:mt-0 ">
          <img
            className="w-20 mx-auto mt-[-4rem] bg-transparent"
            src={Single}
            alt="Single User"
          />
          <h3 className="text-2xl font-bold mt-8">Single User</h3>
          <p className="text-3xl font-bold my-10">{VND.format(3400000)}</p>
          <div className="flex flex-col mb-8">
            <p className="py-2 border-b mx-8">500GB</p>
            <p className="py-2 border-b mx-8">1 User Allowed</p>
            <p className="py-2 border-b mx-8">Send up to 2GB</p>
          </div>
          <button className="btn-primary text-white text-[16px]">Start Trial</button>
        </div>

        <div className="bg-gray-100 rounded-lg shadow-xl text-center p-6 hover:translate-y-[-10px] hover:scale-105 duration-300 transition-all mb-[100px] md:mb-20 ">
          <img
            className="w-20 mx-auto mt-[-4rem] bg-transparent"
            src={Double}
            alt="Single User"
          />
          <h3 className="text-2xl font-bold mt-8">Single User</h3>
          <p className="text-3xl font-bold my-10">{VND.format(3400000)}</p>
          <div className="flex flex-col mb-8">
            <p className="py-2 border-b mx-8">500GB</p>
            <p className="py-2 border-b mx-8">1 User Allowed</p>
            <p className="py-2 border-b mx-8">Send up to 2GB</p>
          </div>
          <button className="btn-select text-[16px]">Start Trial</button>
        </div>

        <div className="rounded-lg shadow-xl text-center p-6 hover:translate-y-[-10px] hover:scale-105 duration-300 transition-all mb-[100px] md:mt-0 ">
          <img
            className="w-20 mx-auto mt-[-4rem] bg-transparent"
            src={Triple}
            alt="Single User"
          />
          <h3 className="text-2xl font-bold mt-8">Single User</h3>
          <p className="text-3xl font-bold my-10">{VND.format(3400000)}</p>
          <div className="flex flex-col mb-8">
            <p className="py-2 border-b mx-8">500GB</p>
            <p className="py-2 border-b mx-8">1 User Allowed</p>
            <p className="py-2 border-b mx-8">Send up to 2GB</p>
          </div>
          <button className="btn-primary text-white text-[16px]">Start Trial</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
