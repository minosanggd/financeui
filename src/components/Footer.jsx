import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full p-4 bg-[#000300]">
      <div className="text-white max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-8  my-16">
        <div className="col-span-2">
          <h1 className="text-center md:text-left text-xl text-[#5dd9dd] font-bold">SANGFinance.</h1>
          <p className="italic text-gray-400 my-4 ">
            <span className="font-medium text-justify">SANG Finance</span> is a platform that allows you to manage your Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Optio architecto
            quasi provident! finances.
          </p>
          <div className="flex gap-x-2 text-4xl justify-evenly ">
            <AiFillFacebook className="rounded-xl hover:fill-[#5dd9dd] transition-all cursor-pointer duration-500" />
            <AiFillGithub className="rounded-xl hover:fill-[#5dd9dd] transition-all cursor-pointer duration-500" />
            <AiFillInstagram className="rounded-xl hover:fill-[#5dd9dd] transition-all cursor-pointer duration-500" />
            <AiFillLinkedin className="rounded-xl hover:fill-[#5dd9dd] transition-all cursor-pointer duration-500" />
            <AiFillTwitterCircle className="rounded-xl hover:fill-[#5dd9dd] transition-all cursor-pointer duration-500" />
          </div>
        </div>

        <div className="flex w-full justify-between col-span-3 text-gray-200 text-lg ">
          <div className="">
            <h3 className="text-xl text-gray-100 hover:text-[#5dd9dd] cursor-pointer">Solutions</h3>
            <p className="hover:text-[#5dd9dd] cursor-pointer">Analytics</p>
            <p className="hover:text-[#5dd9dd] cursor-pointer">Marketing</p>
            <p className="hover:text-[#5dd9dd] cursor-pointer">Commerce</p>
            <p className="hover:text-[#5dd9dd] cursor-pointer">Insights</p>
          </div>
          <div>
            <h3 className="text-xl text-gray-100 hover:text-[#5dd9dd] cursor-pointer">Support</h3>
            <p className="hover:text-[#5dd9dd] cursor-pointer">Pricing</p>
            <p className="hover:text-[#5dd9dd] cursor-pointer">Documentation</p>
            <p className="hover:text-[#5dd9dd] cursor-pointer">Guides</p>
            <p className="hover:text-[#5dd9dd] cursor-pointer">API Status</p>
          </div>
          <div>
            <h3 className="text-xl text-gray-100 hover:text-[#5dd9dd] cursor-pointer">Company</h3>
            <p className="hover:text-[#5dd9dd] cursor-pointer">About</p>
            <p className="hover:text-[#5dd9dd] cursor-pointer">blog</p>
            <p className="hover:text-[#5dd9dd] cursor-pointer">Jobs</p>
            <p className="hover:text-[#5dd9dd] cursor-pointer">Press</p>
            <p className="hover:text-[#5dd9dd] cursor-pointer">Partners</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
